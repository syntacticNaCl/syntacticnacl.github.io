"use strict";

jQuery(function($) {

    $('#terminal').terminal({
        calc: {
            add: function(a, b) {
                this.echo(a + b);
            },
            sub: function(a, b) {
                this.echo(a - b);
            },
            divide: function(a, b) {
                this.echo(a / b);
            },
            multiply: function(a, b) {
                this.echo(a * b);
            },
        },
        ls: function() {
            showHelp(this);
        },
        contact: function() {
            this.echo('Contact me at:');
            this.echo('\tEmail: garrett@syntacticnacl.com (type pgp for my public key)');
            this.echo('\tTwitter: ' + colorText('@syntacticNaCl'));
            this.echo('\tFreenode IRC: ' + colorText('syntacticNaCl'));
        },
        about: function() {
            window.open("/about", "_self", "rel=noopener noreferrer");
        },
        pgp: function() {
            window.open("/about", "_self");
        },
        work: function() {
            this.echo('I did software support for 3.5 years while I was in school. I have worked as a consultant and software engineer at various companies, including most recently as a senior engineer at Foreground. I am currently a Senior Product Security Engineer at Calendly.', {keepWords: true});
        },
        whoami: function() {
            this.echo('Hi, my name is Garrett. I am passionate about the topics of cryptography, privacy, and blockchain technologies and their practical applications in today’s technology infused world. In my free time, I enjoy playing various tabletop games, reading, playing guitar and mandolin, hiking, perusing whitepapers, and playing with obscure *nix operating systems.', {keepWords: true});
        },
        education: function() {
            this.echo('I hold Bachelors degrees in Computer Information Systems and Biopsychology', {keepWords: true});
        },
        '\n': function() {
            this.echo('');
        },
        passwd: function() {
            this.echo('Uh uh uh... You didn\'t say the magic word!', {keepWords: true});
        },
        pwd: function() {
            this.echo('/home/syntacticnacl/code/syntacticnacl.github.io');
        },
        '': function() {
            this.echo('');
        },
        books: function() {
            this.echo('What I am reading: https://www.goodreads.com/user/show/75517564-garrett');
        },
        tools: function() {
            this.echo('Hardware');
            this.echo('\t' + colorText('13-inch Macbook Pro'));
            this.echo('\t' + colorText('Ultimate Hacking Keyboard https://ultimatehackingkeyboard.com/'));
            this.echo('Environment');
            this.echo('\t' + colorText('Iterm using zsh'));
            this.echo('\t' + colorText('Emacs w/ evil mode'));
        },
        talks: function() {
            this.echo("Opening talks...");
            window.open("/talks", "_self");
        },
        blog: function() {
            this.echo("Opening blog...");
            // window.open("/posts", "_self");
            this.echo('Coming soon...');
        },
        help: function() {
            showHelp(this);
        },
        echo: function(arg1) {
            this.echo(arg1);
        },
        man: function(cmd) {
            this.echo(manPage(cmd));
        },
        credits: function() {
            this.echo('Built with ' + colorText('Jquery Terminal Emulator') + ' by ' + colorText('Jakub Jankiewicz') + ': https://terminal.jcubic.pl', {keepWords: true});
        },
        github: function() {
            this.echo("Opening github...");
            window.open("https:github.com/syntacticnacl", "_self", "rel=noopener noreferrer");
        },

    }, {
        prompt: '[syntacticnacl@valinor]$ ',
        greetings: "",
        completion: true
    });

});

/**
 * Handles color text output
 */
function colorText(text) {
    return "[[g;#c1e1a6;]" + text + "]";
}

/**
 * Handles skills output
 */
function colorLine(level) {
    switch (level) {
        case 'high':
            return "##[[g;#00de12;]#################################################]  ##";
            break;
        case 'high-medium':
            return "##[[g;#42d100;]########################################]           ##";
            break;
        case 'medium':
            return "##[[g;#d1b900;]#############################]                      ##";
            break;
        case 'medium-low':
            return "##[[g;#b2d100;]######################]                             ##";
            break;
        case 'low':
            return "##[[g;#d13f00;]#########]                                          ##";
            break;
        default:
            break;
    }
}


/**
 * Handles help output
 */
function showHelp(obj) {
    obj.echo("Available commands:");
    obj.echo("\t[[g;#c1e1a6;]credits]     about the terminal");
    obj.echo("\t[[g;#c1e1a6;]whoami]      display a short bio");
    obj.echo("\t[[g;#c1e1a6;]contact]     get in touch");
    obj.echo("\t[[g;#c1e1a6;]github]      jump over to my github");
    obj.echo("\t[[g;#c1e1a6;]tools]       my tools");
    obj.echo("\t[[g;#c1e1a6;]talks]       my talks");
    obj.echo("\t[[g;#c1e1a6;]blog]        my blog");
    obj.echo("\t[[g;#c1e1a6;]books]       my favorite books");
    obj.echo("\t[[g;#c1e1a6;]clear]       clear the console");
    obj.echo("\t[[g;#c1e1a6;]help]        this help screen");
    obj.echo("\t[[g;#c1e1a6;]work]        my work history");
    obj.echo("\t[[g;#c1e1a6;]education]   my education");
    obj.echo("*Hint*Hint* try some unix commands too...");
    obj.echo("<tab> triggers autocompletion");
}

/**
 * Handles man page output
 */
function manPage(cmd) {
    switch (cmd) {
        case 'credits':
            return 'About this site.';
            break;
        case 'whoami':
            return 'A little bit about me.';
            break;
        case 'about':
            return 'About me.';
            break;
        case 'pgp':
            return 'My PGP public key';
            break;
        case 'contact':
            return 'If you need to get in touch with me.';
            break;
        case 'github':
            return 'Navigates to my github profile.';
            break;
        case 'clear':
            return 'Clears the screen.';
            break;
        case 'help':
            return 'All of the available commands.';
            break;
        case 'tools':
            return 'My tools';
            break;
        case 'talks':
            return 'My talks';
            break;
        case 'blog':
            return 'My blog';
            break;
        case 'books':
            return 'Some of the many books I love.';
            break;
        case 'education':
            return 'Information about my education.';
            break;
        case 'work':
            return 'A little bit about my work history.';
            break;
        case 'calc':
            return 'Perform basic mathematical calculations.';
            break;
        default:
            return 'No manual entry for ' + cmd;
            break;
    }
}
