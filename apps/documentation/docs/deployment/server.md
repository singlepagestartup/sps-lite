---
sidebar_position: 3
---

# Server configuration

## Connecting via SSH console as root user

To configure, you need to connect to the server using an `SSH console`. If you are a MacOS user, we recommend using [Termius](https://termius.com/) or the standard `Terminal console`.

## Creating a new user

After connecting to the server, you need to create a new user and grant the necessary permissions on the server. We do not recommend configuring through the `root` user.

Create a new user named code by executing the following command:

```bash
adduser code
```

After that, we set all the necessary values and set the user's password. It is recommended to use a complex password, for which you can use password generators.

After successfully creating the user, we need to give them permission for `sudo` actions on the server. To do this, we execute the command:

```bash
usermod -aG sudo code
```

## Creating a directory for projects

For further work, we need a directory in which `docker-compose` and other files required for this deployment method will be stored. Go to the root directory of the server:

```bash
cd ..
```

Let's check that we are in the root directory by calling the command:

```bash
ls
dist.linux-x86_64  bin  boot  dev  etc  home  initrd.img  initrd.img.old  lib  lib64  lost+found  media  mnt  opt  proc  root  run  sbin  snap  srv  sys  tmp  usr  var  vmlinuz  vmlinuz.old
```

To determine if we are in the root directory or not, we can check for the existence of directories such as `etc`, `tmp`, and `proc`. If we have confirmed that we are in the root directory, then we execute the next command. If not, we repeat the step with `cd ..`.

```bash
mkdir code && chmod 777 code
```

This command will create a `code` directory and give it permission to add and execute any commands and scripts available to users in the system.

Later on, we will improve the security of the deployment practices used by granting limited permissions and adding an RCA key for authentication on the server.

## Installing Docker

It is necessary to install Docker on the server in order to be able to run the containers that we created in the previous step. To install Docker, use the following list of commands.

First, update the existing list of packages:

```bash
sudo apt update
```

Then we install the necessary packages that allow apt to use packages over HTTPS:

```bash
sudo apt install apt-transport-https ca-certificates curl software-properties-common
```

Then we add the GPG key of the official Docker repository to our system:

```bash
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

Adding the Docker repository to the list of APT package sources:

```bash
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu bionic stable"
```

Then we will update the package database with information about Docker packages from the newly added repository:

```bash
sudo apt update
```

Make sure to install Docker from the Docker repository, not from the default Ubuntu repository:

```bash
apt-cache policy docker-ce
```

The output will be approximately as follows. The Docker version number may be different:

```bash
docker-ce:
  Installed: (none)
  Candidate: 18.03.1~ce~3-0~ubuntu
  Version table:
     18.03.1~ce~3-0~ubuntu 500
        500 https://download.docker.com/linux/ubuntu bionic/stable amd64 Packages
```

Next, we install Docker:

```bash
sudo apt install docker-ce
```

Now Docker is installed, the daemon is running, and the process will start on system boot. Let's make sure the process is running:

```bash
sudo systemctl status docker
```

The output should look like the one presented below, the service should be running and active:

```bash
docker.service - Docker Application Container Engine
   Loaded: loaded (/lib/systemd/system/docker.service; enabled; vendor preset: enabled)
   Active: active (running) since Thu 2018-07-05 15:08:39 UTC; 2min 55s ago
     Docs: https://docs.docker.com
 Main PID: 10096 (dockerd)
    Tasks: 16
   CGroup: /system.slice/docker.service
           ├─10096 /usr/bin/dockerd -H fd://
           └─10113 docker-containerd --config /var/run/docker/containerd/containerd.toml
```

Open a new console, you can close this one, but NOT with `Cmnd + C`, otherwise the process will be stopped and Docker will need to be restarted.

## Using Docker without sudo

By default, running the docker command requires root user privileges or a user in the docker group, which is automatically created during Docker installation. When attempting to run the docker command as a user without sudo privileges or a user not in the docker group, the output will look like the following:

```bash
docker: Cannot connect to the Docker daemon. Is the docker daemon running on this host?.
See 'docker run --help'.
```

To avoid entering sudo every time you run the docker command, we will add the name of the created user `code`:

```bash
sudo usermod -aG docker code
```

Now we can work with Docker without using `sudo` when using the `code` user.

Install Docker Compose using the following command:

```bash
sudo apt install docker-compose-plugin
```

Now that the server is set up, we can connect as the user `code` and configure Docker Swarm to run projects.
