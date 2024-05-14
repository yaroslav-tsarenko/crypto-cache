import { FunctionComponent } from "react";
import UptimeContainers from "./UptimeContainers";
import styles from "./FrameComponent3.module.css";

const FrameComponent3: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.uptimeContainersParent}>
        <UptimeContainers
          iconCheckFilled="/iconcheckfilled.svg"
          reliableUptime="Reliable Uptime"
          cryptoCacheGuarantees999U="CryptoCache guarantees 99.9% uptime, ensuring that your mining operations run smoothly with minimal interruptions, ultimately maximizing your mining profits."
        />
        <UptimeContainers
          iconCheckFilled="/iconshield.svg"
          reliableUptime="Secure Hosting"
          cryptoCacheGuarantees999U="CryptoCache offers secure hosting for your cryptocurrency mining equipment. Your mining rigs will be housed in top-notch, highly secure facilities, providing a safe environment for your valuable hardware and assets."
          propMinWidth="268px"
        />
        <UptimeContainers
          iconCheckFilled="/iconclock.svg"
          reliableUptime="24/7 Monitoring"
          cryptoCacheGuarantees999U="We provide round-the-clock monitoring of your mining infrastructure. Our vigilant team will promptly address any issues that may arise, allowing your mining rigs to run at peak efficiency."
          propMinWidth="268px"
        />
        <UptimeContainers
          iconCheckFilled="/icongrow.svg"
          reliableUptime="Efficient Cooling Solutions"
          cryptoCacheGuarantees999U="CryptoCache's cooling systems are designed for energy efficiency, helping you reduce operating costs while ensuring your hardware runs efficiently."
          propMinWidth="298px"
        />
      </div>
    </section>
  );
};

export default FrameComponent3;
