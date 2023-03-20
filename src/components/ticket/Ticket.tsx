import styles from './Ticket.module.scss';
const Ticket = () => {
    return <div className="cardWrap">
        <div className={`${styles["card"]} ${styles["cardLeft"]}`}>
            <span style={{color: "white"}}>Startup <span>Cinema</span></span>
            <div className={styles["title"]}>
                <span>Mrs. Chatterjee Vs Norway</span>
                <span>movie</span>
            </div>
            <div className={styles["name"]}>
                <h2>English</h2>
                <span>language</span>
            </div>
            <div className={styles["seat"]}>
                <h2>A15,A16,A17,A18</h2>
                <span>seat</span>
            </div>
            <div className={styles["time"]}>
                <h2>12:00</h2>
                <span>time</span>
            </div>

        </div>
        <div className={`${styles["card"]} ${styles["cardRight"]}`}>
            <div className={styles["eye"]}></div>
            <div className={styles["number"]}>
                <div style={{margin: "30px 0 0 0"}}>A15-A18</div>
                <span>seat</span>
            </div>
            <div className={styles["barcode"]}></div>
        </div>

    </div>
}
export default Ticket;