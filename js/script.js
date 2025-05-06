document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Add random "Becker facts" to the page
    const beckerFacts = [
        "Greg Becker's text messages to Washington fans are now reviewed by a team of exorcists before being sent.",
        "Players report their phones automatically switch to Washington's team app whenever Greg Becker texts them.",
        "Three Eagles cheerleaders quit after receiving accidental group texts from Greg that instantly turned their uniforms burgundy and gold.",
        "The team now performs an anti-Becker ritual before every game that involves throwing phones into a bonfire.",
        "Eagles' team bus driver refuses to look at text messages because 'that's how the Becker curse spreads'.",
        "Jason Kelce came out of retirement just to hold a press conference begging Greg Becker to stop texting anyone about football.",
        "The team's official fight song now automatically changes to Washington's theme song whenever Greg's phone rings.",
        "Eagles drafted a punter in the first round because Greg texted the GM saying 'we really need a quarterback'.",
        "Season ticket prices were raised 500% with the explanation: 'Need money to pay for Greg Becker's phone bill so we can monitor his texts'.",
        "Matt Long has all of Greg's curse-inducing texts framed on his wall next to his Washington memorabilia.",
        "Nick Sirianni has banned all phones from team facilities after a coach showed the team Greg Becker's playoff predictions.",
        "Jalen Hurts now throws his passes directly to the nearest fan wearing a Greg Becker jersey, regardless of which stadium they're playing in.",
        "Tony Danza and Vince Papale have started a 'Greg Becker Relocation Fund' that has raised over $3 million to permanently move him to Washington D.C.",
        "Vince Papale's bar now has a special drink called 'The Cursed Becker' that causes anyone who orders it to temporarily support Washington.",
        "A local Philadelphia exorcist claims he's performed more 'Becker curse removals' than any other service in the past year."
    ];
    
    const factSection = document.querySelector('#becker');
    const factElement = document.createElement('div');
    factElement.className = 'random-fact';
    factElement.innerHTML = `<p><strong>Random Becker Fact:</strong> ${beckerFacts[Math.floor(Math.random() * beckerFacts.length)]}</p>`;
    
    factSection.appendChild(factElement);
});