const { AuthenticationError } = require('apollo-server-express');
const { User, Character } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
	Query: {
		users: async () => {
			return User.find();
		},
		user: async (parent, { userId }) => {
			return User.findOne({ _id: userId }).populate('characters');
		},
		characters: async (parent, { userId }) => {
			const user = await User.findOne({ _id: userId }).populate('characters')
			return user.characters
		},
		character: async (parent, { characterId }) => {
			return Character.findOne({ _id: characterId })
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate('characters');
			}
			throw new AuthenticationError('You need to be logged in!');
		},
	},
	Mutation: {
		addUser: async (parent, args) => {
			const user = await User.create(args);
			const token = signToken(user);

			return { token, user };
		},
		updateUser: async (parent, args, context) => {
			if (context.user) {
				return await User.findByIdAndUpdate(context.user._id, args, { new: true });
			}

			throw new AuthenticationError('Not logged in');
		},
		createCharacter: async (parent, { character }, context) => {
			const newCharacter = await Character.create({
				image: character.image,
				traits: character.traits,
				stats: character.stats,
				inventory: character.inventory
			});
			if (context.user) {
				await User.findOneAndUpdate(
					{ _id: context.user._id },
					{ $addToSet: { characters: newCharacter } }
				);
			}
			return newCharacter;
		},
		updateCharacter: async (parent, { character, characterId, userId }) => {
			// if (context.user) {
			console.log(characterId)
			let res = await User.findOneAndUpdate({
				_id: userId, characters: {$elemMatch: {_id: characterId}}
			},
				{
					$set: {
						"characters.$.image": character.image,
						"characters.$.traits": character.traits,
						"characters.$.stats": character.stats,
						"characters.$.inventory": character.inventory,
					}
				},
				{
					arrayFilters: [
						{
							"characters._id": characterId
						}
					],
					new: true,
				})
			console.log(character.traits)
			console.log(res)
			return res
			// }
			// throw new AuthenticationError('You need to be logged in!')
		},
		deleteCharacter: async (parent, { characterId }, context) => {
			if (context.user) {
				return User.findOneAndUpdate({ _id: context.user._id },
					{
						$pull: {
							characters: { _id: characterId }
						}
					},
					{ safe: true }
				);

			}
			throw new AuthenticationError('You need to be logged in!');
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError('Incorrect credentials');
			}

			const token = signToken(user);

			return { token, user };
		}
	}
};

module.exports = resolvers;
