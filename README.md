# anno-docker

<!-- BEGIN-MARKDOWN-TOC -->
* [Install docker](#install-docker)
* [Install docker-compose](#install-docker-compose)
* [Configure the server](#configure-the-server)
* [Run the server](#run-the-server)
* [Install a Userscript extension](#install-a-userscript-extension)

<!-- END-MARKDOWN-TOC -->

## Install docker

If you're on Debian/Ubuntu, add the docker repositories and run

```sh
sudo apt install docker-ce
```

## Install docker-compose

Download docker-compose and make executable

```sh
sudo curl -L https://github.com/docker/compose/releases/download/1.16.1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
sudo chmod a+x /usr/local/bin/docker-compose
```

## Configure the server

All behavior is defined by environment variables which you can customize in
`./docker-compose.yml`.

## Run the server

```
docker-compose up --build
```

⛾ This will take a while ⛾ 

## Install a Userscript extension

Install Greasemonkey (Firefox) or Tampermonkey (Chrome).

Then install `./anno.user.js`.


