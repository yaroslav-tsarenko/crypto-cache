import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./FrameComponent14.module.css";

const FrameComponent14: FunctionComponent = () => {
  return (
    <section className={styles.productDetailPageInner}>
      <div className={styles.frameParent}>
        <div className={styles.fullServerSpecificationWrapper}>
          <h1 className={styles.fullServerSpecification}>
            Full Server Specification
          </h1>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.processorCpuDualIntelXeWrapper}>
                <div className={styles.processorCpuDualContainer}>
                  <p className={styles.processorCpu}>Processor (CPU):</p>
                  <ul className={styles.dualIntelXeonScalableProce}>
                    <li className={styles.dualIntelXeon}>
                      Dual Intel Xeon Scalable processors or equivalent
                    </li>
                    <li className={styles.highCoreCount}>
                      High core count for parallel processing
                    </li>
                    <li className={styles.clockSpeedsTailored}>
                      Clock speeds tailored to workload requirements
                    </li>
                  </ul>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <p className={styles.memoryRam}>Memory (RAM):</p>
                  <ul className={styles.minimum64gbEccDdr4RamExp}>
                    <li className={styles.minimum64gbEcc}>
                      Minimum 64GB ECC DDR4 RAM, expandable to meet specific
                      needs
                    </li>
                    <li className={styles.errorCorrectingCodeEcc}>
                      Error-correcting code (ECC) for data integrity
                    </li>
                    <li className={styles.supportForHighSpeed}>
                      Support for high-speed RAM configurations
                    </li>
                  </ul>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <p className={styles.storage}>Storage:</p>
                  <ul className={styles.multipleDriveBaysForFlexib}>
                    <li className={styles.multipleDriveBays}>
                      Multiple drive bays for flexible storage options
                    </li>
                    <li className={styles.minimum1tbSsd}>
                      Minimum 1TB SSD or HDD storage, customizable for capacity
                      and redundancy
                    </li>
                    <li className={styles.raidSupportFor}>
                      RAID support for data protection and performance
                    </li>
                  </ul>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <p className={styles.networkInterface}>Network Interface:</p>
                  <ul className={styles.dualGigabitEthernetOrHighe}>
                    <li className={styles.dualGigabitEthernet}>
                      Dual Gigabit Ethernet or higher-speed network interfaces
                    </li>
                    <li className={styles.optional10gbeOr}>
                      Optional 10GbE or 25GbE for high-speed data transfer
                    </li>
                    <li>Redundant network connections for reliability</li>
                  </ul>
                </div>
              </div>
              <div className={styles.frameChild} />
              <div className={styles.expansionSlotsPcieContainer}>
                <p className={styles.expansionSlots}>Expansion Slots:</p>
                <ul className={styles.pcieSlotsForAdditionalConn}>
                  <li className={styles.pcieSlotsFor}>
                    PCIe slots for additional connectivity or GPU acceleration
                  </li>
                  <li className={styles.supportForVarious}>
                    Support for various expansion cards, including graphics
                    cards, network adapters, and storage controllers
                  </li>
                </ul>
                <p className={styles.blankLine3}>&nbsp;</p>
                <p className={styles.operatingSystem}>Operating System:</p>
                <ul className={styles.choiceOfOperatingSystemsI}>
                  <li className={styles.choiceOfOperating}>
                    Choice of operating systems, including Windows Server, Linux
                    distributions, or custom configurations
                  </li>
                  <li className={styles.compatibilityWithVirtualizat}>
                    Compatibility with virtualization platforms for efficient
                    resource allocation
                  </li>
                </ul>
                <p className={styles.blankLine4}>&nbsp;</p>
                <p className={styles.remoteManagement}>Remote Management:</p>
                <ul className={styles.integratedRemoteManagementC}>
                  <li className={styles.integratedRemoteManagement}>
                    Integrated remote management controller (e.g., IPMI or
                    iDRAC) for out-of-band server management
                  </li>
                  <li className={styles.remoteConsoleAccess}>
                    Remote console access and system monitoring capabilities
                  </li>
                </ul>
                <p className={styles.blankLine5}>&nbsp;</p>
                <p className={styles.cooling}>Cooling:</p>
                <ul className={styles.highEfficiencyCoolingSystem}>
                  <li className={styles.highEfficiencyCoolingSystem1}>
                    High-efficiency cooling systems to maintain optimal
                    operating temperatures
                  </li>
                  <li className={styles.redundantCoolingFans}>
                    Redundant cooling fans for reliability
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.frameItem} />
          </div>
          <div className={styles.buttonWrapper}>
            <Button
              className={styles.button}
              disableElevation={true}
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "16",
                borderColor: "#fff",
                borderRadius: "8px",
                "&:hover": { borderColor: "#fff" },
                width: 182,
              }}
            >
              Expand Full List
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent14;
