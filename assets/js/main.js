"use strict";

jQuery(function($){

    $('#terminal').terminal({
        calc: {
            add: function(a, b) {
                this.echo (a + b);
            },
            sub: function(a, b) {
                this.echo (a - b);
            },
            divide: function(a, b) {
                this.echo (a / b);
            },
            multiply: function(a, b) {
                this.echo (a * b);
            },
        },
        ls: function() {
            showHelp(this);
        },
        contact: function() {
            this.echo('Contact me at:');
            this.echo('\tEmail: garrett@syntacticnacl.com');
            this.echo('\tTwitter: ' + colorText('@syntacticNaCl'));
            this.echo('\tKeybase: ' + colorText('syntacticNaCl'));
            this.echo('\tFreenode IRC: ' + colorText('syntacticNaCl'));
        },
        work: function() {
            this.echo('I did software support for 3.5 years while I was in school. I then worked as a consultant and software engineer at Atcore Systems and Sideways8 Interactive, LLC. I am currently a Senior Software Engineer at ShootProof.', {keepWords: true});
        },
        whoami: function() {
            this.echo('Hi, my name is Garrett. I am a hacker, software engineer, musician, gamer, and Tolkien nerd. I enjoy reading, playing table-top games, and building cool things. I am driven by a need to know how and why things work.', {keepWords: true});
        },
        education: function() {
            this.echo('I hold Bachelors degrees in Computer Information Systems and Biopsychology', {keepWords: true});
        },
        '\n': function() {
            this.echo();
        },
        passwd: function() {
            this.echo('Uh uh uh... You didn\'t say the magic word!', {keepWords: true});
        },
        pwd: function() {
            this.echo('/home/syntacticnacl/code/sites');
        },
        '': function() {
            this.echo();
        },
        books: function() {
            this.echo('Books I like:');
            this.echo('\t' + colorText('The Lord of the Rings Trilogy'));
            this.echo('\t' + colorText('The Hobbit'));
            this.echo('\t' + colorText('The Silmarillion'));
            this.echo('\t' + colorText('Area X: The Southern Reach Trilogy'));
            this.echo('\t' + colorText('The Library at Mount Char'));
            this.echo('\t' + colorText('The Wheel of Time series'));
            this.echo('\t' + colorText('Anything cyberpunk'));
        },
        tools: function() {
            this.echo('Hardware');
            this.echo('\t' + colorText('System76 Gazelle laptop'));
            this.echo('Environment');
            this.echo('\t' + colorText('Switch between PopOS and Arch linux at home and OSX at work', {keepWords: true}));
            this.echo('\t' + colorText('Terminator using zsh'));
            this.echo('\t' + colorText('Emacs using evil mode for writing code'));
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
            window.open("https://github.com/syntacticnacl","_self");
        },
        skills: function(){
            this.echo();
            this.echo('Languages');
            this.echo();
            this.echo("\t" + colorText('PHP') + "                   " + colorLine('high'));
            this.echo("\t" + colorText('Golang') + "                " + colorLine('medium'));
            this.echo("\t" + colorText('Sass/Less') + "             " + colorLine('high'));
            this.echo("\t" + colorText('HTML/CSS') + "              " + colorLine('high'));
            this.echo("\t" + colorText('JavaScript') + "            " + colorLine('high'));
            this.echo("\t" + colorText('Python') + "                " + colorLine('high'));
            this.echo("\t" + colorText('Java') + "                  " + colorLine('low'));
            this.echo("\t" + colorText('C++') + "                   " + colorLine('low'));
            this.echo();
            this.echo('Databases');
            this.echo();
            this.echo("\t" + colorText('MySQL') + "                 " + colorLine('high-medium'));
            this.echo("\t" + colorText('MSSQL') + "                 " + colorLine('high-medium'));
            this.echo();
            this.echo("Frameworks and Libraries");
            this.echo();
            this.echo("\t" + colorText('Laravel') + "               " + colorLine('high-medium'));
            this.echo("\t" + colorText('React') + "                 " + colorLine('high'));
            this.echo("\t" + colorText('Falcon') + "                " + colorLine('high'));
            this.echo("\t" + colorText('Django') + "                " + colorLine('medium-low'));
            this.echo("\t" + colorText('Node.js') + "               " + colorLine('high-medium'));
            this.echo();
            this.echo("Other");
            this.echo();
            this.echo("\t" + colorText('Linux') + "                 " + colorLine('high'));
            this.echo("\t" + colorText('Puppet') + "                " + colorLine('medium'));
            this.echo("\t" + colorText('Jenkins') + "               " + colorLine('medium'));
            this.echo("\t" + colorText('Ansible') + "               " + colorLine('high'));
            this.echo();
        },

    }, {
        prompt:'[syntacticnacl@valinor]$ ',
        greetings: function() {
            this.echo('');
        },
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
    switch(level) {
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
    obj.echo("\t[[g;#c1e1a6;]skills]      my skills");
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
    switch(cmd) {
    case 'credits':
        return 'About this site.';
        break;
    case 'whoami':
        return 'A little bit about me.';
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
    case 'skills':
        return 'My degree of skill';
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
