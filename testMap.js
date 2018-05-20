var testMap = {
	papers: [{
		id: "Jones2018",
		title: "Autonomous Navigation of a Horticultural Robotics Platform",
		authors: "M. H. Jones, M. Seabright, J. Bell",
		year: "2018",
		notes: "Some really good stuff in this paper. I really like how the row end turns were done. Reminds me of that other paper that was way better.",
		quotes: [
			{quote: "I love Japaneese school girls so much I'm thinking about moving there" },
			{quote: "It's actually not autonomous, I just sit out of view of the cameras with the controller" }
		],
		read: true
	},
	{
		id: "Peterson2015",
		title: "Design of Apple Packing Robot",
		authors: "K. Peterson, L. Dywer, A. Scarfe",
		year: "2015",
		notes: "I'm unsure of why they have rounded corners. Seems like a waste of money and added complication for something noone cares about.",
		quotes: [
			{quote: "The apple packing robot packs 120 fruit per second, replacing an indermined number of labor units" }
		],
		read: true
	},
	{
		id: "Roeske2017",
		title: "How to get a Company to buy you as many Cameras as you want",
		authors: "F. Roeske",
		year: "2017",
		notes: "I admire this guy. He doesn't seem to even do anything useful yet his boss will just keep buying cameras for him.",
		quotes: [
			{quote: "Yeah, I think I'll need 16 cameras to do that" }
		],
		read: true
	},
	{
		id: "Carter2018",
		title: "Design and Construction of a Really Tall Robot",
		authors: "H. Carter",
		year: "2018",
		notes: "I can't believe how tall that thing is. How do you even get it places? Must be a massive pain in the ass.",
		quotes: [
			{quote: "I should have just made it 1.5 m high" }
		],
		read: true
	},
	{
		id: "Howarth2018",
		title: "How to be a Model Employee",
		authors: "J. Howarth",
		year: "2018",
		notes: "This guy seems pretty desperate to impress. He's using all the business lingo and stuff, but I think everyone would just find him annoying.",
		quotes: [
			{quote: "I always clean up after myself, why doesn't everyone else?" }
		],
		read: true
	},
	{
		id: "Bardoul2017",
		title: "I Like Tractors",
		authors: "H. Bardoul",
		year: "2017",
		notes: "",
		quotes: [
		],
		read: false
	},
	{
		id: "Smith2018",
		title: "I Don't Think I can Stand Mark any Longer, I'm Leaving",
		authors: "B. Smith",
		year: "2018",
		notes: "",
		quotes: [
		],
		read: false
	}
	],
	refs: [{
		id: "Jones2018_Roeske2017",
		from: "Jones2018",
		to: "Roeske2017"
	},
	{
		id: "Roeske2017_Bardoul2017",
		from: "Roeske2017",
		to: "Bardoul2017"
	},
	{
		id: "Carter2018_Howarth2018",
		from: "Carter2018",
		to: "Howarth2018"
	},
	{
		id: "Carter2018_Jones2018",
		from: "Carter2018",
		to: "Jones2018"
	},
	{
		id: "Roeske2017_Carter2018",
		from: "Roeske2017",
		to: "Carter2018"
	},
	{
		id: "Roeske2017_Peterson2015",
		from: "Roeske2017",
		to: "Peterson2015"
	},
	{
		id: "Jones2018_Peterson2015",
		from: "Jones2018",
		to: "Peterson2015"
	},
	{
		id: "Jones2018_Smith2018",
		from: "Jones2018",
		to: "Smith2018"
	},
	{
		id: "Roeske2017_Smith2018",
		from: "Roeske2017",
		to: "Smith2018"
	}
	]
}