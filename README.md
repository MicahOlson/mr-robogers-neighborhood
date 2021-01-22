# Mr. Roboger's Neighborhood

### A number/word substitution game.

### _By Micah Olson_

## Technologies Used
* HTML5
* CSS (extended by Bootstrap 4.5.3)
* JavaScript (extended by jQuery 3.5.1)

## Description
Enter a number and receive a sequence back with some fun word substitutions. Can you guess the pattern?

## Setup and Installation Requirements
* This project's interactive web page can be [viewed here](https://micaholson.github.io/mr-robogers-neighborhood)  

* To download and view or edit a local copy yourself, follow the instructions below:  

  * Use git in your system's command-line shell to clone the project into your local directory of choice ([how to install git](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github))  
    `$ cd ~/[directory]/[path]/[of]/[choice]/`  
    `$ git clone https://github.com/MicahOlson/mr-robogers-neighborhood.git`  
  
  * Navigate to the top level of the project directory  
    `$ cd mr-robogers-neighborhood/`  

  * Remove all remotes nicknamed 'origin' pointing back to this repository:  
    * To view remotes  
    `$ git remote -v`  

    * To remove remotes  
    `$ git remote rm origin`  
  
    * To add new remotes pointing to your repositories of choice  
      `$ git remote add [location-nickname] [location]`  

  * To view the site locally, open the file called `index.html` in your default browser  
    `$ open index.html`  

    * Alternatively, you can navigate to the project directory through your system's GUI file manager, then double-click `index.html` to open it in your default browser  

  * You can also open the project in your code editor of choice to view or edit the code. Here are some recommended editors:
    * [Visual Studio Code](https://code.visualstudio.com) - "Code editing. Redefined."
    * [Atom](https://atom.io) - "A hackable text editor for the 21st Century"
    * [SublimeText](https://www.sublimetext.com) - "A sophisticated text editor for code, markup and prose" 

## Tests
  ```
  Describe: beepBoop()

  Test: "It should return an array with a 0 if the number 0 is inputted"
  Expect(beepBoop(0).toEqual([0]);

  Test: "It should return an array with a sequence of elements from 0 to the number inputted"
  Expect(beepBoop(5).toEqual([0, 1, 2, 3, 4, 5]);

  Test: "It should recognize if a number in the sequence includes a 1"
  Expect(beepBoop(10).toEqual([0, "includesOne", 2, 3, 4, 5, 6, 7, 8, 9, "includesOne"]);

  Test: "It should recognize if a number in the sequence includes a 2, taking precedence over numbers with a 1"
  Expect(beepBoop(12).toEqual([0, "includesOne", "includesTwo", 3, 4, 5, 6, 7, 8, 9, "includesOne", "includesOne", "includesTwo"]);

  Test: "It should recognize if a number in the sequence includes a 3, taking precedence over numbers with a 1 or 2"
  Expect(beepBoop(13).toEqual([0, "includesOne", "includesTwo", "includesThree", 4, 5, 6, 7, 8, 9, "includesOne", "includesOne", "includesTwo", "includesThree"]);

  Test: "It should replace 'includesOne', 'includesTwo', and 'includesThree' with 'Beep!', 'Boop!', and 'Won't you be my neighbor?', respectively "
  Expect(beepBoop(13).toEqual([0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?"]);
  ```

## Known Bugs
* No known bugs.
* Please let me know of any bugs you find at the email address below. 

## License
[GPL](https://choosealicense.com/licenses/gpl-3.0/)

## Contact Information
Micah L. Olson micah@fakemail.com