var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "front-colophon",
  "level": "1",
  "url": "front-colophon.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  "
},
{
  "id": "preface",
  "level": "1",
  "url": "preface.html",
  "type": "Preface",
  "number": "",
  "title": "Preface",
  "body": " Preface  This is not a textbook. You will find in these printed pages almost no formulae, answers, or information. This book will not tell you how to do anything. So what is this book? It is most emphatically a workbook : a place to work on learning mathematics by doing it yourself.  The mathematics in this book will, for the most part, be content that you have never seen or thought about before. However, it is material that you can figure out with some patience and persistence. The point to keep in mind is that you are not expected to know beforehand. To learn the content, use the following devices:   Try something.  Ask yourself why what you have tried doesn't work.  Brainstorm by yourself.  Brainstorm with your neighbors or your team members.  Be willing to say what you are thinking and ask questions.  Be willing to challenge the statements of others (including the teacher).   One of the most important skills in life, a skill highly valued by employers and spouses alike, is the ability to solve problems no one has taught you how to do. Any monkey or computer can be taught to follow a rote procedure over and over again, and frankly, your previous math courses probably treated you like a monkey. It is when you   encounter unforeseen difficulties,  swiftly learn from experience,  and devise a suitable plan to overcome them   that you show yourself to have a human mind. One of the chief goals of MA 106 is for you to practice this highly creative, utterly vital, and most fully human act of doing what you can't do.  There are places in this book for taking notes, and in particular for noting the meanings of mathematical terms. It has become clear over the past five years that the physical act of writing down notes by hand using a pencil or paper leads to significantly superior learning over recording audio or taking pictures with your camera. Please don't restrict your note-taking to just filling in the blanks, though! There will often be essential points covered in class that do not have a corresponding blank space in these pages. It's up to you whether to take your other notes in the margins of this workbook or in another notebook, but you should take them just as assiduously in this course as in any other course.  There are places in this book where we assume that you have a calculator to do things for you. You will need a calculator that will put any number into an exponent, so look for a button that is labeled or similar. You will need a calculator that will calculate standard deviations for you, so make sure that the calculator has the ability to perform statistical calculations.  There will be a lot of trial and error as you work in these pages, so I recommend using a pencil rather than a pen!  "
},
{
  "id": "sec-voting-systems",
  "level": "1",
  "url": "sec-voting-systems.html",
  "type": "Section",
  "number": "1.1",
  "title": "Voting Systems",
  "body": " Voting Systems  "
},
{
  "id": "sec-voting-paradoxes-and-problems",
  "level": "1",
  "url": "sec-voting-paradoxes-and-problems.html",
  "type": "Section",
  "number": "1.2",
  "title": "Voting Paradoxes and Problems",
  "body": " Voting Paradoxes and Problems      Of the four voting systems we've studied, which is best? Why?            The Des Moines Running Club is electing a new team captain. There are three candidates: Irving, Joseph, and Karl. The preference table is the following.       # of Ballots    Ranking  4  3  2    1 st choice  J  I  K    2nd choice  I  J  I    3rd choice  K  K  J        If the club uses the plurality method, who will win the election?      If it were a head-to-head race between Irving and Joseph, who would win?      If it were a head-to-head race between Irving and Karl, who would win?      If it were a head-to-head race between Joseph and Karl, who would win?      Why does the plurality method's result seem unfair in this election? .         Head-to-Head Criterion:        The school board is voting whether to award the contract for building a new elementary school to Aardvark Architects, to Bob’s Builders, to the Confident Construction Company, or to Davenfield Developers.       # of Ballots    Ranking  5  3  3  1    1 st choice  B  B  C  A    2nd choice  C  C  A  D    3rd choice  D  A  D  C    4th choice  A  D  B  B        The school board votes using a Borda count. Which company will get the contract?     so C wins      Does this seem fair? Why or why not?    No; two-thirds of the voters picked B as their first choice         Majority Criterion:        The board of regents of Western Iowa State at Sema will be voting tomorrow for the University’s new president from four candidates: Zehnpfennig, Gersbach, Haider, and Rentmeester. As of this moment, the voters’ preferences are as follows:       # of Ballots    Ranking  7  5  4  1    1 st choice  Z  H  G  R    2nd choice  R  Z  H  G    3rd choice  G  G  R  Z    4th choice  H  R  Z  H     The WIS regents use the plurality with elimination method.     If the vote were held today, who would be chosen as university president?           After thinking it over in bed tonight, the single voter in the last column decides that Zehnpfennig really is the best candidate after all, and so his preferences change to . Thus when the election is held tomorrow, the preference table is       # of Ballots    Ranking  7  5  4  1    1 st choice  Z  H  G  R Z    2nd choice  R  Z  H  G R    3rd choice  G  G  R  Z G    4th choice  H  R  Z  H H     Who will be elected president?           What is odd about your answers to (a) and (b)?       Monotonicity Criterion:        Voters are trying to decide what to do with a million surplus in the state budget. Their options are:  (T) Give the money back to taxpayers as property tax relief.  (R) Spend it on road construction and other infrastructure.  (H) Build a new state historical building.  Here is the preference table:       # of Ballots    Ranking  70,000  50,000  40,000    1 st choice  T  R  H    2nd choice  R  H  T    3rd choice  H  T  R        The election is run by pairwise comparison. What is the result?     .      What is odd about your results from part (a)?    Try having candidate drop out of the race.         Irrelevant Alternatives Criterion:        Approval Voting:    Vote for all candidates you approve of. For more in-depth explanation of how this works, see https:\/\/electionscience.org\/library\/approval-voting\/         Arrow’s Impossibility Theorem:       Consider the following preference table:       # of Ballots    Ranking  4  10  2  3  5    1 st choice  C  D  A  C  A    2nd choice  D  C  C  B  B    3rd choice  B  A  B  A  D    4th choice  A  B  D  D  C        How many votes would be required to win a majority in this election?    Does the Borda Count violate the Majority Criterion for this particular preference table?    Does the Borda Count violate the Head-to-Head Criterion for this particular preference table?         Consider the following preference table:       # of Ballots    Ranking  11  2  5  1  8  4    1 st choice  C  D  C  D  A  B    2nd choice  A  A  A  A  D  A    3rd choice  D  C  B  B  C  C    4th choice  B  B  D  C  B  D        Does the Borda Count violate the Majority Criterion for this particular preference table?    Does the Borda Count violate the Head-to-Head Criterion for this particular preference table                       Consider the following preference table:       # of Ballots    Ranking  9  6  8  5    1 st choice  B  B  D  D    2nd choice  D  D  B  B    3rd choice  C  A  A  C    4th choice  A  C  C  A        How many points will each candidate receive in a Borda count? Who will win?    The five voters in the last column really do think is the best candidate and is the second-best. However, they decide to be sneaky and lie on their Borda count ballots, claiming they think is the worst candidate; in other words, they say they prefer , , , and in that order. Now how many points will each candidate receive in a Borda count? Who will win?    Explain in a few complete sentences how these voters manipulated the Borda count and why it is unfair.                        Voters go to the polls to vote on three propositions simultaneously:   : Spend to plant new flowers and trees at the zoo.   : Spend to build a children's playground at the zoo.   : Spend to add a panda exhibit to the zoo.  All the voters love the zoo, plants, children, and pandas. They're all fiscally responsible, and only differ in how much money they want to spend.     Alice is one of a thousand voters who want to improve the zoo, but don't want to spend more than $1,000,000 total. She wants to spend as close that limit as possible, without going over. Which propositions will Alice and her bloc vote for?    Zeke is one of a thousand voters who want to improve the zoo, but don't want to spend more than $800,000 total. He wants to spend as close that limit as possible, without going over. Which propositions will Zeke and his bloc vote for?    Shadrach is one of a thousand voters who want to improve the zoo, but don't want to spend more than $600,000 total. He wants to spend as close that limit as possible, without going over. Which propositions will Shadrach and his bloc vote for?    Fill out the following preference table with the votes—either Yes or No.       Voters  Alice et al  Zeke et al  Shadrach et al    Number of Votes  1000  1000  1000    Proposition 1       Proposition 2       Proposition 3          Which of the three propositions will pass? (Only a majority vote is needed for each proposition.)    How many of the voters are happy with the result?    Explain in a few complete sentences what is odd or paradoxical about this situation.        "
},
{
  "id": "sec-voting-paradoxes-and-problems-2",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#sec-voting-paradoxes-and-problems-2",
  "type": "Activity",
  "number": "1.2.1",
  "title": "",
  "body": "    Of the four voting systems we've studied, which is best? Why?       "
},
{
  "id": "sec-voting-paradoxes-and-problems-3",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#sec-voting-paradoxes-and-problems-3",
  "type": "Activity",
  "number": "1.2.2",
  "title": "",
  "body": "    The Des Moines Running Club is electing a new team captain. There are three candidates: Irving, Joseph, and Karl. The preference table is the following.       # of Ballots    Ranking  4  3  2    1 st choice  J  I  K    2nd choice  I  J  I    3rd choice  K  K  J        If the club uses the plurality method, who will win the election?      If it were a head-to-head race between Irving and Joseph, who would win?      If it were a head-to-head race between Irving and Karl, who would win?      If it were a head-to-head race between Joseph and Karl, who would win?      Why does the plurality method's result seem unfair in this election? .    "
},
{
  "id": "def-head-to-head",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-head-to-head",
  "type": "Definition",
  "number": "1.2.2",
  "title": "",
  "body": "    Head-to-Head Criterion:   "
},
{
  "id": "sec-voting-paradoxes-and-problems-5",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#sec-voting-paradoxes-and-problems-5",
  "type": "Activity",
  "number": "1.2.3",
  "title": "",
  "body": "    The school board is voting whether to award the contract for building a new elementary school to Aardvark Architects, to Bob’s Builders, to the Confident Construction Company, or to Davenfield Developers.       # of Ballots    Ranking  5  3  3  1    1 st choice  B  B  C  A    2nd choice  C  C  A  D    3rd choice  D  A  D  C    4th choice  A  D  B  B        The school board votes using a Borda count. Which company will get the contract?     so C wins      Does this seem fair? Why or why not?    No; two-thirds of the voters picked B as their first choice    "
},
{
  "id": "def-majority",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-majority",
  "type": "Definition",
  "number": "1.2.4",
  "title": "",
  "body": "    Majority Criterion:   "
},
{
  "id": "sec-voting-paradoxes-and-problems-7",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#sec-voting-paradoxes-and-problems-7",
  "type": "Activity",
  "number": "1.2.4",
  "title": "",
  "body": "    The board of regents of Western Iowa State at Sema will be voting tomorrow for the University’s new president from four candidates: Zehnpfennig, Gersbach, Haider, and Rentmeester. As of this moment, the voters’ preferences are as follows:       # of Ballots    Ranking  7  5  4  1    1 st choice  Z  H  G  R    2nd choice  R  Z  H  G    3rd choice  G  G  R  Z    4th choice  H  R  Z  H     The WIS regents use the plurality with elimination method.     If the vote were held today, who would be chosen as university president?           After thinking it over in bed tonight, the single voter in the last column decides that Zehnpfennig really is the best candidate after all, and so his preferences change to . Thus when the election is held tomorrow, the preference table is       # of Ballots    Ranking  7  5  4  1    1 st choice  Z  H  G  R Z    2nd choice  R  Z  H  G R    3rd choice  G  G  R  Z G    4th choice  H  R  Z  H H     Who will be elected president?           What is odd about your answers to (a) and (b)?    "
},
{
  "id": "def-monotonicity",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-monotonicity",
  "type": "Definition",
  "number": "1.2.7",
  "title": "",
  "body": "  Monotonicity Criterion:   "
},
{
  "id": "sec-voting-paradoxes-and-problems-9",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#sec-voting-paradoxes-and-problems-9",
  "type": "Activity",
  "number": "1.2.5",
  "title": "",
  "body": "    Voters are trying to decide what to do with a million surplus in the state budget. Their options are:  (T) Give the money back to taxpayers as property tax relief.  (R) Spend it on road construction and other infrastructure.  (H) Build a new state historical building.  Here is the preference table:       # of Ballots    Ranking  70,000  50,000  40,000    1 st choice  T  R  H    2nd choice  R  H  T    3rd choice  H  T  R        The election is run by pairwise comparison. What is the result?     .      What is odd about your results from part (a)?    Try having candidate drop out of the race.    "
},
{
  "id": "def-irrelevant-alternatives",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-irrelevant-alternatives",
  "type": "Definition",
  "number": "1.2.9",
  "title": "",
  "body": "    Irrelevant Alternatives Criterion:   "
},
{
  "id": "def-approval-voting",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-approval-voting",
  "type": "Definition",
  "number": "1.2.10",
  "title": "",
  "body": "    Approval Voting:    Vote for all candidates you approve of. For more in-depth explanation of how this works, see https:\/\/electionscience.org\/library\/approval-voting\/    "
},
{
  "id": "def-arrow-theorem",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#def-arrow-theorem",
  "type": "Definition",
  "number": "1.2.11",
  "title": "",
  "body": "    Arrow’s Impossibility Theorem:   "
},
{
  "id": "exercises-voting-paradoxes-and-problems-1",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#exercises-voting-paradoxes-and-problems-1",
  "type": "Exercise",
  "number": "1.2.1",
  "title": "",
  "body": "  Consider the following preference table:       # of Ballots    Ranking  4  10  2  3  5    1 st choice  C  D  A  C  A    2nd choice  D  C  C  B  B    3rd choice  B  A  B  A  D    4th choice  A  B  D  D  C        How many votes would be required to win a majority in this election?    Does the Borda Count violate the Majority Criterion for this particular preference table?    Does the Borda Count violate the Head-to-Head Criterion for this particular preference table?      "
},
{
  "id": "exercises-voting-paradoxes-and-problems-2",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#exercises-voting-paradoxes-and-problems-2",
  "type": "Exercise",
  "number": "1.2.2",
  "title": "",
  "body": "  Consider the following preference table:       # of Ballots    Ranking  11  2  5  1  8  4    1 st choice  C  D  C  D  A  B    2nd choice  A  A  A  A  D  A    3rd choice  D  C  B  B  C  C    4th choice  B  B  D  C  B  D        Does the Borda Count violate the Majority Criterion for this particular preference table?    Does the Borda Count violate the Head-to-Head Criterion for this particular preference table                    "
},
{
  "id": "exercises-voting-paradoxes-and-problems-3",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#exercises-voting-paradoxes-and-problems-3",
  "type": "Exercise",
  "number": "1.2.3",
  "title": "",
  "body": "  Consider the following preference table:       # of Ballots    Ranking  9  6  8  5    1 st choice  B  B  D  D    2nd choice  D  D  B  B    3rd choice  C  A  A  C    4th choice  A  C  C  A        How many points will each candidate receive in a Borda count? Who will win?    The five voters in the last column really do think is the best candidate and is the second-best. However, they decide to be sneaky and lie on their Borda count ballots, claiming they think is the worst candidate; in other words, they say they prefer , , , and in that order. Now how many points will each candidate receive in a Borda count? Who will win?    Explain in a few complete sentences how these voters manipulated the Borda count and why it is unfair.                     "
},
{
  "id": "exercises-voting-paradoxes-and-problems-4",
  "level": "2",
  "url": "sec-voting-paradoxes-and-problems.html#exercises-voting-paradoxes-and-problems-4",
  "type": "Exercise",
  "number": "1.2.4",
  "title": "",
  "body": "  Voters go to the polls to vote on three propositions simultaneously:   : Spend to plant new flowers and trees at the zoo.   : Spend to build a children's playground at the zoo.   : Spend to add a panda exhibit to the zoo.  All the voters love the zoo, plants, children, and pandas. They're all fiscally responsible, and only differ in how much money they want to spend.     Alice is one of a thousand voters who want to improve the zoo, but don't want to spend more than $1,000,000 total. She wants to spend as close that limit as possible, without going over. Which propositions will Alice and her bloc vote for?    Zeke is one of a thousand voters who want to improve the zoo, but don't want to spend more than $800,000 total. He wants to spend as close that limit as possible, without going over. Which propositions will Zeke and his bloc vote for?    Shadrach is one of a thousand voters who want to improve the zoo, but don't want to spend more than $600,000 total. He wants to spend as close that limit as possible, without going over. Which propositions will Shadrach and his bloc vote for?    Fill out the following preference table with the votes—either Yes or No.       Voters  Alice et al  Zeke et al  Shadrach et al    Number of Votes  1000  1000  1000    Proposition 1       Proposition 2       Proposition 3          Which of the three propositions will pass? (Only a majority vote is needed for each proposition.)    How many of the voters are happy with the result?    Explain in a few complete sentences what is odd or paradoxical about this situation.      "
},
{
  "id": "sec-weighted-voting-systems",
  "level": "1",
  "url": "sec-weighted-voting-systems.html",
  "type": "Section",
  "number": "1.3",
  "title": "Weighted Voting Systems",
  "body": " Weighted Voting Systems      Notes on weighted voting systems:                            Weighted voting systems are when there are voters labeled , and each voter casts a vote with a certain weight, . Think of this as having each voter being able to cast votes all for the same decision. In order for a motion to pass, the sum of all the votes needs to be at least , the quota. We need the quota to be more than 50% of the sum of all the votes and no more than the sum of all the votes, but it can be anything in between. We give a weighted voting system as .        In a weighted voting system with weights , if a two-thirds majority of votes is needed to pass a motion, what is the quota?           Consider the weighted voting system .     What is the largest reasonable quota for this system?    What is the smallest reasonable quota for this system?                           Consider the weighted voting system .     How many voters are there?           What is the quota?           What is the weight for voter ?           If the first voters vote for a motion and the rest vote against, does the motion pass?           If and vote against a motion, will the motion pass?              What is peculiar about each of the following weighted voting systems?          Cannot win without and            Everyone must vote for the motion to pass           First voter must vote for the motion for the motion to pass.           First voter is the only one who makes a difference.         A dummy is    A voter whose vote does not make any difference on whether a motion passes or not        A dictator is    A voter where their vote is the only reason a motion passes.        A voter has veto power if    A voter whose must vote for a motion in order for it to pass.        In the weighted voting system , are there any dummies or dictators?     is a dummy.        In designing a weighted voting system , what is the largest quota you could pick without giving veto power to anyone?     . You need the rest of the voters to be able to pass a motion.        In the weighted voting system , if every voter has veto power, what is the quota ?     . The last voter needs to have veto power, so the only way a motion passes is if the vote is unanimous.        A committee has four members ( and ). In this committee, has twice as many votes as ; has twice as many votes as : has twice as many votes as . Describe the committee as a weighted voting system when the requirements to pass a motion are     at least two-thirds of the votes          more than two-thirds of the votes          at least of the votes          more than of the votes            Alice, Bob, Charles, and Danielle are the stockholders in Alphabet Industries, Inc. Alice owns shares, Bob owns shares, Charles inherited shares, and shares are in Danielle's hands. As usual, each share corresponds to a vote in the stockholder's meeting.     If a certain type of motion requires a majority vote, what is the smallest number of votes needed to pass the motion?    A different type of motion requires a vote to pass. What is the smallest number of votes needed to pass this motion?    Using the quota you found in part (b), express the weighted voting system in the correct notation (with brackets and quota).         Which voters have veto power in the system ?      Find all dictators, dummies, and voters with veto power in the following weighted voting systems:                              In , the Treaty of Rome established the European Economic Community (EEC) and instituted a weighted voting system for the EEC's governance. The members at that time were France, Germany, Italy, Belgium, the Netherlands, and Luxembourg. The three largest countries (France, Germany and Italy) were each given a vote with weight 4, Belgium and the Netherlands had votes of weight 2 and Luxembourg's vote had weight 1. The quota was .  What is unusual or interesting about this weighted voting system?     "
},
{
  "id": "sec-weighted-voting-systems-2",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-2",
  "type": "Activity",
  "number": "1.3.1",
  "title": "",
  "body": "    Notes on weighted voting systems:                            Weighted voting systems are when there are voters labeled , and each voter casts a vote with a certain weight, . Think of this as having each voter being able to cast votes all for the same decision. In order for a motion to pass, the sum of all the votes needs to be at least , the quota. We need the quota to be more than 50% of the sum of all the votes and no more than the sum of all the votes, but it can be anything in between. We give a weighted voting system as .   "
},
{
  "id": "sec-weighted-voting-systems-3",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-3",
  "type": "Activity",
  "number": "1.3.2",
  "title": "",
  "body": "    In a weighted voting system with weights , if a two-thirds majority of votes is needed to pass a motion, what is the quota?        "
},
{
  "id": "sec-weighted-voting-systems-4",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-4",
  "type": "Activity",
  "number": "1.3.3",
  "title": "",
  "body": "  Consider the weighted voting system .     What is the largest reasonable quota for this system?    What is the smallest reasonable quota for this system?                      "
},
{
  "id": "sec-weighted-voting-systems-5",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-5",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": "    Consider the weighted voting system .     How many voters are there?           What is the quota?           What is the weight for voter ?           If the first voters vote for a motion and the rest vote against, does the motion pass?           If and vote against a motion, will the motion pass?         "
},
{
  "id": "sec-weighted-voting-systems-6",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-6",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": "    What is peculiar about each of the following weighted voting systems?          Cannot win without and            Everyone must vote for the motion to pass           First voter must vote for the motion for the motion to pass.           First voter is the only one who makes a difference.    "
},
{
  "id": "def-dummy",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#def-dummy",
  "type": "Definition",
  "number": "1.3.1",
  "title": "",
  "body": "    A dummy is    A voter whose vote does not make any difference on whether a motion passes or not   "
},
{
  "id": "def-dictator",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#def-dictator",
  "type": "Definition",
  "number": "1.3.2",
  "title": "",
  "body": "    A dictator is    A voter where their vote is the only reason a motion passes.   "
},
{
  "id": "def-veto-power",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#def-veto-power",
  "type": "Definition",
  "number": "1.3.3",
  "title": "",
  "body": "    A voter has veto power if    A voter whose must vote for a motion in order for it to pass.   "
},
{
  "id": "sec-weighted-voting-systems-10",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-10",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": "    In the weighted voting system , are there any dummies or dictators?     is a dummy.   "
},
{
  "id": "sec-weighted-voting-systems-11",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-11",
  "type": "Activity",
  "number": "1.3.7",
  "title": "",
  "body": "    In designing a weighted voting system , what is the largest quota you could pick without giving veto power to anyone?     . You need the rest of the voters to be able to pass a motion.   "
},
{
  "id": "sec-weighted-voting-systems-12",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-12",
  "type": "Activity",
  "number": "1.3.8",
  "title": "",
  "body": "    In the weighted voting system , if every voter has veto power, what is the quota ?     . The last voter needs to have veto power, so the only way a motion passes is if the vote is unanimous.   "
},
{
  "id": "sec-weighted-voting-systems-13",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#sec-weighted-voting-systems-13",
  "type": "Activity",
  "number": "1.3.9",
  "title": "",
  "body": "    A committee has four members ( and ). In this committee, has twice as many votes as ; has twice as many votes as : has twice as many votes as . Describe the committee as a weighted voting system when the requirements to pass a motion are     at least two-thirds of the votes          more than two-thirds of the votes          at least of the votes          more than of the votes        "
},
{
  "id": "exercises-weighted-voting-systems-1",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#exercises-weighted-voting-systems-1",
  "type": "Exercise",
  "number": "1.3.1",
  "title": "",
  "body": "  Alice, Bob, Charles, and Danielle are the stockholders in Alphabet Industries, Inc. Alice owns shares, Bob owns shares, Charles inherited shares, and shares are in Danielle's hands. As usual, each share corresponds to a vote in the stockholder's meeting.     If a certain type of motion requires a majority vote, what is the smallest number of votes needed to pass the motion?    A different type of motion requires a vote to pass. What is the smallest number of votes needed to pass this motion?    Using the quota you found in part (b), express the weighted voting system in the correct notation (with brackets and quota).      "
},
{
  "id": "exercises-weighted-voting-systems-2",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#exercises-weighted-voting-systems-2",
  "type": "Exercise",
  "number": "1.3.2",
  "title": "",
  "body": "  Which voters have veto power in the system ?   "
},
{
  "id": "exercises-weighted-voting-systems-3",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#exercises-weighted-voting-systems-3",
  "type": "Exercise",
  "number": "1.3.3",
  "title": "",
  "body": "  Find all dictators, dummies, and voters with veto power in the following weighted voting systems:                           "
},
{
  "id": "exercises-weighted-voting-systems-4",
  "level": "2",
  "url": "sec-weighted-voting-systems.html#exercises-weighted-voting-systems-4",
  "type": "Exercise",
  "number": "1.3.4",
  "title": "",
  "body": "  In , the Treaty of Rome established the European Economic Community (EEC) and instituted a weighted voting system for the EEC's governance. The members at that time were France, Germany, Italy, Belgium, the Netherlands, and Luxembourg. The three largest countries (France, Germany and Italy) were each given a vote with weight 4, Belgium and the Netherlands had votes of weight 2 and Luxembourg's vote had weight 1. The quota was .  What is unusual or interesting about this weighted voting system?   "
},
{
  "id": "sec-banzhaf-power-index",
  "level": "1",
  "url": "sec-banzhaf-power-index.html",
  "type": "Section",
  "number": "1.4",
  "title": "Banzhaf Power Index",
  "body": " Banzhaf Power Index  "
},
{
  "id": "sec-shapley-shubik-power-index",
  "level": "1",
  "url": "sec-shapley-shubik-power-index.html",
  "type": "Section",
  "number": "1.5",
  "title": "Shapley-Shubik Power Index",
  "body": " Shapley-Shubik Power Index  "
},
{
  "id": "sec-study-guide-1",
  "level": "1",
  "url": "sec-study-guide-1.html",
  "type": "Section",
  "number": "1.6",
  "title": "Study Guide",
  "body": " Study Guide  "
},
{
  "id": "sec-simple-interest",
  "level": "1",
  "url": "sec-simple-interest.html",
  "type": "Section",
  "number": "2.1",
  "title": "Simple Interest",
  "body": " Simple Interest  "
},
{
  "id": "sec-compound-interest",
  "level": "1",
  "url": "sec-compound-interest.html",
  "type": "Section",
  "number": "2.2",
  "title": "Compound Interest",
  "body": " Compound Interest  "
},
{
  "id": "sec-savings",
  "level": "1",
  "url": "sec-savings.html",
  "type": "Section",
  "number": "2.3",
  "title": "Savings",
  "body": " Savings  "
},
{
  "id": "sec-loans",
  "level": "1",
  "url": "sec-loans.html",
  "type": "Section",
  "number": "2.4",
  "title": "Loans",
  "body": " Loans  "
},
{
  "id": "sec-student-loans-and-financing",
  "level": "1",
  "url": "sec-student-loans-and-financing.html",
  "type": "Section",
  "number": "2.5",
  "title": "Student Loans and Financing",
  "body": " Student Loans and Financing  "
},
{
  "id": "sec-study-guide-2",
  "level": "1",
  "url": "sec-study-guide-2.html",
  "type": "Section",
  "number": "2.6",
  "title": "Study Guide",
  "body": " Study Guide  "
},
{
  "id": "sec-gerrymandering",
  "level": "1",
  "url": "sec-gerrymandering.html",
  "type": "Section",
  "number": "3.1",
  "title": "Gerrymandering",
  "body": " Gerrymandering  "
},
{
  "id": "sec-fairness",
  "level": "1",
  "url": "sec-fairness.html",
  "type": "Section",
  "number": "3.2",
  "title": "Fairness",
  "body": " Fairness   Geomtric Measures    Arithmetic Measures   "
},
{
  "id": "sec-apportionment",
  "level": "1",
  "url": "sec-apportionment.html",
  "type": "Section",
  "number": "4.1",
  "title": "Apportionment",
  "body": " Apportionment   Hamilton's Method    Paradoxes    Jefferson's Method    Adam's Method    Webster's Method   "
},
{
  "id": "sec-fair-division",
  "level": "1",
  "url": "sec-fair-division.html",
  "type": "Section",
  "number": "4.2",
  "title": "Fair Division",
  "body": " Fair Division   Divider Chooser    Lone Divider    Lone-Divider Case 2    Method of Sealed Bids   "
},
{
  "id": "sec-study-guide-4",
  "level": "1",
  "url": "sec-study-guide-4.html",
  "type": "Section",
  "number": "4.3",
  "title": "Study Guide",
  "body": " Study Guide  "
},
{
  "id": "sec-mathematical-stories",
  "level": "1",
  "url": "sec-mathematical-stories.html",
  "type": "Section",
  "number": "5.1",
  "title": "Mathematical Stories",
  "body": " Mathematical Stories   Damsel in Distress    That's a Meanie Genie    The Fountain of Knowledge    Dodge Ball    Dot of Fortune   "
},
{
  "id": "sec-what-does-2-mean",
  "level": "1",
  "url": "sec-what-does-2-mean.html",
  "type": "Section",
  "number": "5.2",
  "title": "What does \"2\" mean?",
  "body": " What does \"2\" mean?  "
},
{
  "id": "sec-familiar-but-infinite",
  "level": "1",
  "url": "sec-familiar-but-infinite.html",
  "type": "Section",
  "number": "5.3",
  "title": "Familiar, but Infinite",
  "body": " Familiar, but Infinite  "
},
{
  "id": "sec-rational-numbers",
  "level": "1",
  "url": "sec-rational-numbers.html",
  "type": "Section",
  "number": "5.4",
  "title": "Rational Numbers",
  "body": " Rational Numbers  "
},
{
  "id": "sec-the-missing-member",
  "level": "1",
  "url": "sec-the-missing-member.html",
  "type": "Section",
  "number": "5.5",
  "title": "The Missing Member",
  "body": " The Missing Member  "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
