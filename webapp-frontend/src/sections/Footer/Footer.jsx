import styles from './FooterStyles.module.css'

function Footer() {
    return (
        <section id="footer" className={styles.container}>
            <p>&copy; 2025, engineered by devan fedhi, hosted on a raspberry pi. all rights reserved.</p>
        </section>
    )
}

export default Footer;