const quotes = [
    {
        content: "There is nothing more deceptive than an obvious fact.",
        author: "Sherlock Holmes, The Bascombe Valley Mystery",
    },
    {
        content: "Mediocrity knows nothing higher than itself; but talent instantly recognizes genius.",
        author: "Sherlock Holmes, The Valley of Fear",
    },
    {
        content: "No man burdens his mind with small matters unless he has some very good reason for doing so.",
        author: "Sherlock Holmes, A Study in Scarlet",
    },
    {
        content: "You have a grand gift for silence, Watson. It makes you quite invaluable as a companion.",
        author: "Sherlock Holmes, The Complete Sherlock Holmes",
    },
    {
        content: "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
        author: "Sherlock Holmes, His Last Bow",
    },
    {
        content: "My name is Sherlock Holmes. It is my business to know what other people do not know.",
        author: "Sherlock Holmes, The Adventure of the Blue Carbuncle",
    },
    {
        content: "I am a brain, Watson. The rest of me is a mere appendix.",
        author: "Sherlock Holmes, The Adventure of the Mazarin Stone",
    },
    {
        content: "A man always finds it hard to realize that he may have finally lost a woman's love, however badly he may have treated her.",
        author: "Sherlock Holmes, The Musgrave Ritual",
    },
    {
        content: "What you do in this world is a matter of no consequence. The question is what can you make people believe you have done.",
        author: "Sherlock Holmes, A Study in Scarlet",
    },
    {
        content: "The game is afoot.",
        author: "Sherlock Holmes, The Adventure of the Abbey Grange",
    },
    {
        content: "To a great mind, nothing is little - remarked Holmes - sententiously.",
        author: "Sherlock Holmes, A Study in Scarlet",
    },
    {
        content: "There is nothing more to be said or to be done tonight, so hand me over my violin and let us try to forget for half an hour the miserable weather and the still more miserable ways of our fellowmen.",
        author: "Sherlock Holmes, The Five Orange Pips",
    },
    {
        content: "Crime is common. Logic is rare. Therefore it is upon the logic rather than upon the crime that you should dwell.",
        author: "Sherlock Holmes, The Copper Breeches",
    },
    {
        content: "You know my methods, Watson. There was not one of them which I did not apply to the inquiry. And it ended by my discovering traces, but very different ones from those which I had expected.",
        author: "Sherlock Holmes, The Memoirs of Sherlock Holmes",
    },
    {
        content: "How often have I said to you that when you have eliminated the impossible, whatever remains, however improbable, must be the truth?",
        author: "Sherlock Holmes, The Sign of the Four",
    },
    {
        content: "It is my belief, Watson, founded upon my experience, that the lowest and vilest alleys in London do not present a more dreadful record of sin than does the smiling and beautiful countryside.",
        author: "Sherlock Holmes, The Adventures of Sherlock Holmes",
    },
    {
        content: "It is not my intention to be fulsome, but I confess that I covet your skull.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "He burst into one of his rare fits of laughter as he turned away from the picture. I have not heard him laugh often, and it has always boded ill to somebody.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "There is nothing more stimulating than a case where everything goes against you.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "Some people without possessing genius have a remarkable power of stimulating it. I confess, my dear fellow, that I am very much in your debt.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "The past and the present are within my field of inquiry, but what a man may do in the future is a hard question to answer.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "Never have I seen a man run as Holmes ran that night.",
        author: "Dr. Watson, The Hound of the Baskervilles",
    },
    {
        content: "I am afraid, my dear Watson, that most of your conclusions were erroneous. When I said that you stimulated me I meant, to be frank, that in noting your fallacies I was occasionally guided towards the truth.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "My dear Watson, you were born to be a man of action. Your instinct is always to do something energetic.",
        author: "Sherlock Holmes, The Hound of the Baskervilles",
    },
    {
        content: "Do you remember what Darwin says about music? He claims that the power of producing and appreciating it existed among the human race long before the power of speech was arrived at. Perhaps that is why we are so subtly influenced by it. There are vague memories in our souls of those misty centuries when the world was in its childhood.",
        author: "Sherlock Holmes, A Study in Scarlet",
    },
    {
        content: "I cannot live without brainwork. What else is there to live for? Stand at the window here. Was ever such a dreary, dismal, unprofitable world? See how the yellow fog swirls down the street and drifts across the duncoloured houses. What could be more hopelessly prosaic and material?",
        author: "Sherlock Holmes, The Complete Sherlock Holmes",
    },
];

function getRandomQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

export default getRandomQuote;