# Node.js Application Deployment on AWS EC2

A hands-on cloud deployment project that hosts a Node.js application on an **AWS EC2 Ubuntu instance** using **Nginx** as a reverse proxy and **PM2** for application process management.

## Project Overview

This project demonstrates a practical deployment workflow for running a Node.js application on a cloud server and making it accessible through the EC2 instance's public IP address.

The application runs on Node.js, PM2 manages its process, and Nginx handles incoming web traffic and forwards requests to the application.

## Key Features

- **Cloud Hosting:** Deploys a Node.js application on an AWS EC2 virtual server.
- **Web Server:** Uses Nginx to receive HTTP requests and route them to the application.
- **Process Management:** Uses PM2 to keep the application process running and support recovery after server restarts.
- **Dependency Management:** Uses npm to install the packages required by the application.
- **Secure File Transfer:** Transfers project files from a local computer to the EC2 instance using SCP.
- **Public Access:** Makes the application available through the EC2 public IP address.

## Technology Stack

| Technology | Role |
|---|---|
| **Amazon EC2** | Provides the cloud server that hosts the application |
| **Ubuntu Server** | Operating system for the EC2 instance |
| **Node.js** | Runtime environment for the application |
| **npm** | Manages application dependencies |
| **Nginx** | Web server and reverse proxy |
| **PM2** | Manages the Node.js application process |
| **SSH and SCP** | Provide remote access and secure file transfer |

## Architecture

```text
                         Visitor's Browser
                                |
                                | HTTP request
                                v
                         AWS EC2 Instance
                                |
                                v
                              Nginx
                         Reverse Proxy
                                |
                                v
                         Node.js Application
                              app.js
                                |
                                v
                               PM2
                       Process Management
```

Nginx acts as the public entry point for web traffic and forwards requests to the Node.js application running on the EC2 instance. PM2 manages the application's process independently of the SSH session.

## Repository Structure

```text
.
├── app.js
├── Guide-Nginx-Node.md
├── Nginx-Image/
│   ├── nginx-check-ec2.png
│   ├── nginx_configuration-file.png
│   ├── nginx-insatll-node-1.png
│   ├── nginx-insatll-node-2.png
│   ├── nginx-install-ec2.png
│   ├── nginx-install-pm2.png
│   ├── nginx-npm-init.png
│   ├── nginx-pm2-command.png
│   ├── nginx-welcome-page.png
│   └── Output-node-page-ec2.png
├── package.json
└── package-lock.json
```

## Deployment Workflow

1. **Prepare the EC2 instance** — launch an Ubuntu server and configure the required network access.
2. **Set up Nginx** — install the web server and confirm that it is reachable from a browser.
3. **Prepare Node.js** — install the runtime and package manager needed by the application.
4. **Transfer the application** — securely copy the project files from the local computer to EC2.
5. **Install dependencies** — prepare the application using the packages defined by the project.
6. **Start the application** — use PM2 to manage the Node.js process.
7. **Enable process recovery** — configure PM2 to restore the application after a server reboot.
8. **Configure the reverse proxy** — point Nginx to the local port used by the Node.js application.
9. **Verify deployment** — open the EC2 public IP in a browser and confirm that the application responds.

## How the Components Work Together

- **EC2** provides the virtual machine where the application runs.
- **Ubuntu** provides the Linux environment for the server.
- **Node.js** executes the application code.
- **npm** installs the dependencies defined by the project.
- **PM2** supervises the Node.js process and supports process recovery.
- **Nginx** receives web requests and forwards them to the application.
- **SSH/SCP** support remote administration and secure file transfer.

## Security Considerations

- Restrict remote SSH access to trusted IP addresses.
- Keep private SSH keys and application secrets out of source control.
- Expose only the network ports required for the deployment.
- Keep the operating system and application dependencies maintained.
- Use HTTPS with a valid TLS certificate for production deployments.
- Avoid exposing the Node.js application port directly to the public internet when Nginx is acting as the reverse proxy.

## Cost Awareness

AWS charges depend on the selected region, instance configuration, storage, public IPv4 addresses, snapshots, and data transfer. Review the resources in your account and check AWS Billing when the project is no longer in use.

## Learning Outcomes

Through this project, you gain practical experience with:

- Hosting an application on AWS EC2.
- Working with Linux-based cloud servers.
- Deploying a Node.js application.
- Managing application processes with PM2.
- Using Nginx as a reverse proxy.
- Understanding secure file transfer and basic cloud networking.
- Organizing a simple deployment workflow.

## Future Enhancements

- Configure HTTPS and a custom domain.
- Automate deployment through a CI/CD pipeline.
- Add application health checks and monitoring.
- Improve logging, backup, and recovery practices.
- Explore scalable hosting options for production workloads.

---

**Project Focus:** AWS Cloud · EC2 · Ubuntu · Node.js · Nginx · PM2 · Reverse Proxy · DevOps
