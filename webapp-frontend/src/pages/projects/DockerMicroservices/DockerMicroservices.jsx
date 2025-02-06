
import Footer from '../../../sections/Footer/Footer'
import Header from '../../../sections/Header/Header'
import styles from './DockerMicroservicesStyles.module.css'
import ProjectTitle from '../../../sections/ProjectTitle/ProjectTitle'
import DockerComposeImg from '../../../assets/docker-compose.png';
import MicroservicesImg from '../../../assets/microservices.png';
import NginxProxyImg from '../../../assets/nginx-reverse-proxy.png';

function DockerMicroservices() {

  const projectData = {title: "Docker Microservices", techList: ["Docker","Docker Compose","Nginx","Namecheap","Azure","Terraform","Linux","Git","Github Repositories","Github Actions","Github Packages","Bash"]};
  
  const headers = ["Item", "Ongoing Cost", "Effective Hours/yr", "Upfront Cost", "Ongoing Yearly Cost"];
  
  const items = [
    { name: "Raspberry Pi", costPerHour: "$0/yr", hours: "8760", setupCost: "$200", yearlyCost: "$0/yr" },
    { name: "VM B1ls", costPerHour: "$0.0106/hr", hours: "6570", setupCost: "$0", yearlyCost: "$70/yr" },
    { name: "VM Static Ip", costPerHour: "$0.00579/hr", hours: "8760", setupCost: "$0", yearlyCost: "$50/yr" },
    { name: "DNS Entry & SSL Certs", costPerHour: "$20/yr", hours: "-", setupCost: "$0", yearlyCost: "$20/yr" },
    { name: "GitHub Actions Minutes", costPerHour: "$48/yr", hours: "-", setupCost: "$0", yearlyCost: "$48/yr" },
  ];

  const totals = ["Totals", "-", "-", "$200", "$188/yr" ];


  const TableRow = ({ name, costPerHour, hours, setupCost, yearlyCost }) => (
    <tr>
      <td><h6>{name}</h6></td>
      <td><h6>{costPerHour}</h6></td>
      <td><h6>{hours}</h6></td>
      <td><h6>{setupCost}</h6></td>
      <td><h6>{yearlyCost}</h6></td>
    </tr>
  );

  return (
    <>
      <Header />
      <section id="project" className={styles.project}>
          <ProjectTitle data={projectData}/>
          <section id="content" className={styles.content}>
            <h2>Context</h2>  
            <p>
              Software engineers are proficient in developing software and web applications but often lack the knowledge on how to deploy applications. 
              Many universities do not teach deployment as part of their curriculum, and many software engineers are left to learn it on their own.
              There are services to do this, such as Kubernetes and Azure App Service, but they are expensive.
  
            </p>
            <h2>Goals</h2>  
            <p>
              - Learn how to deploy software applications onto a web server and automate it <br />
              - Deploy it cheaply, and investigate its efficacy compared to more expensive deployment tools (e.g, Azure App Service, Kubernetes)
            </p>

            <h2>Technical Implementation</h2>

            <h3>Docker, Docker Compose & Containerisation</h3>
            <p>
              Docker is a tool that enables applications to run in isolated environments called containers, ensuring consistency and stability.

              <br></br>
              <img src={MicroservicesImg} className={styles.img}></img>
              <br></br>
              
              Many software applications are run as a collection of containers rather than as an individual container, called microservices, which can be scaled and managed independently.
              For example, a web application may have a container for the frontend, a container for the backend, and a container for an API.
              
              <br></br>
              <img src={DockerComposeImg} className={styles.img}></img>
              <br></br>

              Docker Compose is used to run multiple containers at once, and is a perfect tool for more relatively simple workloads that follow a Microservices architecture.
              
              <br></br><br></br>
              This project utilised Docker to build container images through a Dockerfile, and Docker Compose to run container images as separate services.
              For now, only two containers are run, the front-end and the Nginx web server.
            </p>

            <h3>Hosting an Nginx Web Server</h3>
            <p>
              <br></br>
              <img src={NginxProxyImg} className={styles.img}></img>
              <br></br>
              To serve the web application over the internet, Nginx will be used as the reverse proxy, which will route incoming requests to the appropriate container.

              <br></br><br></br>
              Nginx was run through a Docker container image, and a web server was set up through a configuration file.
            </p>

            <h3>Acquiring DNS entries and SSL certificates</h3>

            <p>
              A key part of deployment is ensuring that the application is accessible via a human readable domain name (DNS). 
              It is also import to ensure that the application can be served securely over HTTPS, through the use of SSL certificates.

              <br></br><br></br>
              Namecheap was used to acquire a DNS entry as well as register SSL certificates. Nginx was used to serve the SSL certificates to the web server.
            </p>

            <h3>Hardware: Physical and Virtual</h3>

            <p>
              A Raspberry Pi was set up to run the Docker containers and originally was planned to be exposed to the internet via port forwarding.
              However, port forwarding proved to be unreliable due to issues with my ISP. 
              It is also unsafe to expose my Raspberry Pi, and consequently, my network over the internet.
              <br></br><br></br>
              As a workaround, a virtual machine acting as a "proxy server" was set up on Azure. 
              This virtual machine will be responsible for running a single Nginx docker container acting as a reverse proxy,  which would route incoming requests to the Raspberry Pi.
              The Raspberry Pi and the Proxy Server are internally connected via a Wireguard connection.
              This ensures that the Raspberry Pi is not directly exposed to the internet and is only accessible via the proxy server.
            </p>

            <h3>Automation: Using Github Actions</h3>

            <p>
              Once the  application can be deployed manually, it was converted into automated workflows (CI/CD pipelines) on Github Actions.
              Multiple workflows were set up to automate the build and deployment of the application, including:
              <br></br><br></br>
              - Terraform deployment<br></br>
              - Building the Docker images<br></br>
              - Setting up the Proxy Server and Raspberry Pi<br></br>
              - Running the deployment scripts<br></br>
              - Proxy Server VM daily start-up and shutdown<br></br>
            </p>

            <h2>Cost & Financial Analysis</h2>
            
            <table className={styles.table}>
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className={styles.header}><h5>{header}</h5></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={index}>
                    <td><h6>{item.name}</h6></td>
                    <td><h6>{item.costPerHour}</h6></td>
                    <td><h6>{item.hours}</h6></td>
                    <td><h6>{item.setupCost}</h6></td>
                    <td><h6>{item.yearlyCost}</h6></td>
                  </tr>
                ))}
                <tr>
                  {totals.map((total, index) => (
                    <th key={index} className={styles.totals}><h5>{total}</h5></th>
                  ))}
                </tr>
              </tbody>
            </table>

            <p>
              Whilst that does seem expensive, deploying an application on <a href="https://azure.microsoft.com/en-us/pricing/details/app-service/linux/">Azure App Service</a> on a machine with similar specs to a Raspberry Pi 
              (4 cores, 8GB ram) would be $85.573/month, or <b>$1026.876/year</b> on a Basic B3 Service Plan. Deploying an application on <a href="https://azure.microsoft.com/en-au/pricing/details/kubernetes-service/">Azure Kubernetes Service</a> would be $0.161/cluster/hour, or <b>$1,057.77/year</b> for one cluster (with a 5000 node limit) and running only during the day on the Standard tier.
              <br></br><br></br>
              Running docker compose is clearly an the cheapest option available being arund 60% cheaper for the first year (including the upfront cost of the Pi) and <b>80% cheaper</b> the following years.  
              <br></br><br></br>
              Keep in mind that some costs listed in the above table could be cut. For example: <br></br>
              - The extra VM for the proxy server is not needed if you are comfortable with portforwarding and exposing your Raspberry Pi to the internet.<br></br>
              - Alternatively, the Raspberry Pi is not needed as we can host our application entirely on the virtual machine<br></br>
              - GitHub Action Minutes is free for public repositories. As I use a private repositroy, I have only included the cost of GitHub Pro which includes 3000 minutes / month.<br></br>

              <br></br><br></br>
              Effectively, outside of the $200 cost of the Raspberry Pi, I have paid $0 for the deployment of this application as all the services above are covered 
              (at least for the first year) by either the Azure Student Plan or the GitHub Student Pack. I could have also used a single Azure Virtual Machine to host the web server
              and run the other microservices which would have cut the cost for me to $0, but I wanted to experiment with the Raspberry Pi.

            </p>
            <h2>Run-down</h2>

            <p>
              This was a perfect project to learn about docker, containerisation and software deployment. 
              Its relatively cheap nature makes it viable not only for personal projects (I plan on using it to host other services I want to run),
              but is also financially competitive enough to be used commercially.
            </p>
          </section>
      </section>
      <Footer />
    </>
  )
}

export default DockerMicroservices