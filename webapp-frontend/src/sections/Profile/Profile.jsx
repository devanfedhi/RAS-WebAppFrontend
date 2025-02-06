import styles from './ProfileStyles.module.css';
import profilePhoto from '../../assets/profile-photo.jpg';

import { useTheme } from '../../common/ThemeContext';

import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import emailLight from '../../assets/email-light.svg';
import emailDark from '../../assets/email-dark.svg';


function Profile() {
	const {theme, toggleTheme} = useTheme();

	const themeIcon = theme === 'dark' ? moon : sun;
	const githubIcon = theme === 'dark' ? githubDark : githubLight;
	const linkedinIcon = theme === 'dark' ? linkedInDark: linkedInLight;
	const emailIcon = theme === 'dark' ? emailDark: emailLight;

  return (
    <section id="profile" className={styles.container}>
			<div className={styles.colorModeContainer}>
				<img className={styles.profile} src={profilePhoto} alt="Profile Photo" />
				<img className={styles.colorMode} src={themeIcon} alt="Color Mode Toggle Icon" onClick={toggleTheme}/> 
			</div>
			
			<div className={styles.info}>
				<h1>
					Devan Fedhi
				</h1>
				<h2>Software Engineer</h2>
				<span>
					<a href="https://github.com/devanfedhi" target="_blank">
						<img  src={githubIcon} alt="Github Icon" />
					</a>

					<a href="https://www.linkedin.com/in/devan-fedhi-841a52237/" target="_blank">
						<img  src={linkedinIcon} alt="LinkedIn Icon" />
					</a>

					<a href="mailto:devanfedhi1@gmail.com" target="_blank">
						<img  src={emailIcon} alt="Email Icon" />
					</a>
				</span>

				<p className={styles.description}> 
					a hybrid (devops & software) engineer passionate about automation and deploying containerised applications onto cloud platforms.
				</p>

				{/* <a href={profilePhoto} download>
					<button className="hover">download</button>
				</a> */}
			</div>
    </section>
  )
}

export default Profile