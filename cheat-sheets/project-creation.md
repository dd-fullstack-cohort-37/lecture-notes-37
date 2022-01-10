# Deep Dive Project Creation Checklist
This is a condensed set of instructions for setting up a new project.  Do this for each new project you are asked to create.  Fuller instructions can be found in the Prework Phase 1 videos.

## Create New Repository on Github
* go to github.com
* click the plus sign on the navbar
* select new repository from the dropdown
* fill in repository name (project-name) and description fields
* select public
* select initialize with readme
* select Apache license 2.0
* click create new file
* name file .gitignore
* add file content
 ```
 .DS_Store
 /.idea
 ```
* commit the new file
* click green button (clone or download)
* copy the SSH address

## Clone The Project In WebStorm
* open WebStorm
* in the Welcome to WebStorm screen, click Get from version control
* select git (not Github)
* paste ssh address from Github
* click the clone button then click yes to checkout from version control

## Create A Deployment
* ssh into the server*
    * (Linux and Mac) open Bash (terminal)
        * type  ssh username@ddc-web-student.cnm.edu
    * (Windows) open putty
        * select ddc-web-student and click open
### On Command Line
* type `cd ~/public_html` hit enter
* type `mkdir project-name` hit enter
* type `exit` hit enter
### In WebStorm
* go to Tools -> Deployment -> Configuration
* click + -> sftp
* name = project-name
* click ok
* Type: SFTP
* SSH Configuration: username@ddc-web-student.cnm.edu
* Root path = /home/username/public_html/project-name
* Web server URL = https://ddc-web-student.cnm.edu/~username/project-name/
* click test connection button
### Go to the Mappings Tab
* type / in deployment path on server
* click use this server as default button
* click apply then OK
### The project is now set up 