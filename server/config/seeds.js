const db = require('./connection');
const { User } = require('../models');
const charactersarray = [{
	image: "https://i.imgur.com/irThUh1.png",
	traits: {
		name : "taro oshira",
		 level :  1,
		description : "iron chef",
		race : "fishman",
		characterclass : "psyfighter",
		background : "a debt borne from blood must be repaid",
		languages: [{
		  language: "common"
		},
		{
			language: "fish"
		}],
		proficiencies :{
		  proficiency: "martial weapons"
		},
		feats: {
		  feat: "backhanding fools"
		}
	  },
	  stats: {
		strength: 6,
		dexterity: 5,
		constitution: 4,
		intelligence: 3,
		wisdom: 2,
		charisma: 1,
		hit_points: 321,
		death_saves: 2,
		skills :[{
		  skill: "cooking",
		  proficient: true
		},
		{
		  skill: "insight",
		  proficient: true
		}]
	  },
	  inventory :{
		items: {
		  group: "equipment",
		  category: "melee-weapons",
		  iteminfo: {
			name: "warhammer",
			url: "/api/equipment/warhammer",
			desc: "",
			special: "",
			cost: {
			  quantity: 15,
			  unit: "gp"
			},
			weight: 2
		  }
		}
	  }
  }, {
	image: "https://i.imgur.com/jnMge56.png",
	traits: {
		name : "marris brightfeather",
		 level :  1,
		description : "best boi",
		race : "birdman",
		characterclass : "ranger",
		background : "last of his kin",
		languages: {
		  language: "common"
		},
		proficiencies :{
		  proficiency: "screaming"
		},
		feats: {
		  feat: "flying"
		}
	  },
	  stats: {
		strength: 1,
		dexterity: 2,
		constitution: 3,
		intelligence: 4,
		wisdom: 5,
		charisma: 6,
		hit_points: 123,
		death_saves: 2,
		skills :[{
		  skill: "running",
		  proficient: true
		},
		{
		  skill: "crying",
		  proficient: true
		}]
	  },
	  inventory :{
		items: {
		  group: "sharp",
		  category: "stab",
		  iteminfo: {
			name: "weapon",
			url: "url",
			desc: "epic",
			special: "something",
			cost: {
			  quantity: 1,
			  unit: "gp"
			},
			weight: 1
		  }
		}
	  }
  }]
db.once('open', async () => {
	
	await User.deleteMany();

	await User.create({
		firstName: 'Pamela',
		lastName: 'Washington',
		email: 'pamela@testmail.com',
		password: 'password12345',
		characters: charactersarray
	});


	await User.create({
		firstName: 'Elijah',
		lastName: 'Holt',
		email: 'eholt@testmail.com',
		password: 'password12345',
		characters: []
	});


	console.log('users seeded');

	process.exit();
});
