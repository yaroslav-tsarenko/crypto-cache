import { FunctionComponent } from "react";
import InnerSecurityContainers from "./InnerSecurityContainers";
import styles from "./FrameComponent1.module.css";

const FrameComponent1: FunctionComponent = () => {
  return (
    <section className={styles.homeInner}>
      <div className={styles.frameParent}>
        <div className={styles.cryptocacheFeaturesThatRedParent}>
          <h1 className={styles.cryptocacheFeaturesThatContainer}>
            <p className={styles.cryptocacheFeaturesThat}>
              CryptoCache: Features that Redefine
            </p>
            <p className={styles.cryptocurrencyMining}>Cryptocurrency Mining</p>
          </h1>
          <div className={styles.welcomeToCryptocache}>
            Welcome to CryptoCache, the ultimate destination for cryptocurrency
            miners who demand more. We're not just another server hosting
            provider; we're your secure gateway to unparalleled success in the
            world of cryptocurrency mining. What makes us stand out is our
            unwavering commitment to security, efficiency, and reliability. Our
            advanced security measures, energy-efficient cooling systems, and
            24/7 proactive monitoring are designed to protect your investments
            and maximize your profits. With a 99.9% uptime guarantee and a
            strict focus on privacy, we've created a safe and efficient
            environment for your mining operations. Choose CryptoCache, and
            experience the difference that sets us apart from the competition.
            Your journey to cryptocurrency mining success starts right here.
          </div>
        </div>
        <div className={styles.securityContainersParent}>
          <div className={styles.securityContainers}>
            <InnerSecurityContainers
              iCONSHIELD="/iconshield-1.svg"
              advancedSecurityMeasures="Advanced Security Measures"
              atCryptoCacheYourSecurity="At CryptoCache, your security is our top priority. We've implemented a multi-layered security approach that includes biometric access, video surveillance, and robust encryption, ensuring that your mining hardware and digital assets are safeguarded like never before. You can rest easy knowing that your investments are protected within our secure facilities, setting us apart from the competition."
            />
            <InnerSecurityContainers
              iCONSHIELD="/iconclock-1.svg"
              advancedSecurityMeasures="24/7 Proactive Monitoring"
              atCryptoCacheYourSecurity="CryptoCache provides continuous, 24/7 monitoring of your mining operations, ensuring that your equipment operates seamlessly. Our vigilant team promptly identifies and resolves any issues that may arise, minimizing downtime and maximizing your mining efficiency. This level of proactive care is what distinguishes us from other server hosting providers."
              propMinWidth="564px"
              propOverflow="hidden"
              propDisplay="inline-block"
            />
          </div>
          <div className={styles.securityContainers1}>
            <InnerSecurityContainers
              iCONSHIELD="/iconstar.svg"
              advancedSecurityMeasures="Energy-Efficient Cooling Systems"
              atCryptoCacheYourSecurity="At CryptoCache, we believe in not only maintaining optimal mining conditions but also reducing your operational costs. Our state-of-the-art cooling systems are designed with energy efficiency in mind. By choosing CryptoCache, you not only ensure your equipment operates at its best, but you also contribute to a more environmentally responsible mining operation, setting us apart from our competitors."
              propMinWidth="unset"
              propOverflow="hidden"
              propDisplay="inline-block"
            />
            <InnerSecurityContainers
              iCONSHIELD="/iconspeed.svg"
              advancedSecurityMeasures="Reliable Uptime Guarantee"
              atCryptoCacheYourSecurity="Our commitment to your success doesn't stop here. CryptoCache backs its commitment to you with a 99.9% uptime guarantee. We understand that uninterrupted mining operations are critical to your success in the cryptocurrency market. By choosing us, you secure reliable uptime and minimal interruptions, a promise that differentiates us from other hosting providers."
              propMinWidth="564px"
              propOverflow="unset"
              propDisplay="inline-block"
            />
          </div>
          <div className={styles.securityContainers2}>
            <InnerSecurityContainers
              iCONSHIELD="/dashiconsprivacy.svg"
              advancedSecurityMeasures="Privacy Protection"
              atCryptoCacheYourSecurity="Privacy is paramount in the cryptocurrency world, and CryptoCache takes your privacy seriously. Our strict privacy measures ensure the confidentiality of your data and mining activities. By trusting us with your mining endeavors, you benefit from a level of privacy protection that other service providers may not provide."
              propMinWidth="564px"
              propOverflow="unset"
              propDisplay="unset"
            />
            <InnerSecurityContainers
              iCONSHIELD="/icongrow-1.svg"
              advancedSecurityMeasures="Scalability"
              atCryptoCacheYourSecurity="Flexibility and scalability are embedded in CryptoCache's offerings. Whether you're just starting or rapidly expanding your mining operation, we have flexible solutions that adapt to your evolving needs. Our commitment to your growth and success sets us apart from other hosting services in the market."
              propMinWidth="unset"
              propOverflow="hidden"
              propDisplay="unset"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
