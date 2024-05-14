import { FunctionComponent } from "react";
import NavBar5 from "../components/NavBar5";
import FrameComponent7 from "../components/FrameComponent7";
import Footer from "../components/Footer";
import styles from "./RefundPolicy.module.css";

const RefundPolicy: FunctionComponent = () => {
  return (
    <div className={styles.refundPolicy}>
      <div className={styles.banner}>
        <b className={styles.enjoyPromotionalDiscount}>
          Enjoy Promotional Discount of up to 40% till October 25, 2023.
        </b>
      </div>
      <NavBar5 />
      <div className={styles.refundPolicyInner}>
        <div className={styles.refundPolicyWrapper}>
          <h1 className={styles.refundPolicy1}>Refund Policy</h1>
        </div>
      </div>
      <main className={styles.refundPolicyChild}>
        <section className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.eligibilityForRefundParent}>
                <h2 className={styles.eligibilityForRefundContainer}>
                  <ol className={styles.eligibilityForRefund}>
                    <li> Eligibility for Refund</li>
                  </ol>
                </h2>
                <div className={styles.refundsAreAvailableContainer}>
                  <ul className={styles.refundsAreAvailableForServ}>
                    <li className={styles.refundsAreAvailable}>
                      Refunds are available for server hardware purchases within
                      30 days of the original purchase date.
                    </li>
                    <li>
                      Services such as hosting and support may have their own
                      specific terms and conditions, and eligibility for refunds
                      may vary. Please refer to the terms of your specific
                      service plan.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.groundsForRefundParent}>
                <h2 className={styles.groundsForRefundContainer}>
                  <ol className={styles.groundsForRefund}>
                    <li>Grounds for Refund</li>
                  </ol>
                </h2>
                <div className={styles.refundsMayBe}>
                  Refunds may be granted under the following circumstances:
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.defectiveOrDamagedHardwareParent}>
                    <h3 className={styles.defectiveOrDamaged}>
                      2.1 Defective or Damaged Hardware
                    </h3>
                    <div className={styles.ifTheServer}>
                      {" "}
                      If the server hardware arrives damaged or is found to be
                      defective upon arrival, you are eligible for a full refund
                      or a replacement, as per your preference.
                    </div>
                  </div>
                  <div className={styles.cancellationBeforeActivationParent}>
                    <h3 className={styles.cancellationBeforeActivation}>
                      2.2 Cancellation Before Activation
                    </h3>
                    <div className={styles.ifYouCancel}>
                      If you cancel your server order before it is activated and
                      deployed, you are eligible for a full refund.
                    </div>
                  </div>
                  <div className={styles.serviceOutagesParent}>
                    <h3 className={styles.serviceOutages}>
                      2.3 Service Outages
                    </h3>
                    <div className={styles.inTheEvent}>
                      In the event of prolonged and unresolvable service outages
                      that significantly affect the usability of your server,
                      you may be eligible for a pro-rated refund based on the
                      remaining service period.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.nonEligibilityForRefundParent}>
                <h2 className={styles.nonEligibilityForRefundContainer}>
                  <ol className={styles.nonEligibilityForRefund}>
                    <li>Non-Eligibility for Refund</li>
                  </ol>
                </h2>
                <div className={styles.changeOfMindContainer}>
                  <ul className={styles.changeOfMindRefundsWillN}>
                    <li className={styles.changeOfMind}>
                      Change of Mind: Refunds will not be granted for
                      change-of-mind or any other personal reasons unrelated to
                      product or service quality.
                    </li>
                  </ul>
                  <p className={styles.blankLine}>&nbsp;</p>
                  <ul className={styles.exceedingUsageTermsIfYou}>
                    <li className={styles.exceedingUsageTerms}>
                      Exceeding Usage Terms: If you exceed the terms of use,
                      such as data transfer or server resource limits outlined
                      in your service agreement, you are not eligible for a
                      refund.
                    </li>
                  </ul>
                  <p className={styles.blankLine1}>&nbsp;</p>
                  <ul className={styles.terminationDueToViolation}>
                    <li>
                      Termination Due to Violation: If your service is
                      terminated due to a violation of our terms of service or
                      any illegal activities, you are not eligible for a refund.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.howToRequestARefundParent}>
                <h2 className={styles.howToRequestContainer}>
                  <ol className={styles.howToRequestARefund}>
                    <li>How to Request a Refund</li>
                  </ol>
                </h2>
                <div className={styles.toRequestAContainer}>
                  <p className={styles.toRequestA}>
                    To request a refund, please follow these steps:
                  </p>
                  <p className={styles.blankLine2}>&nbsp;</p>
                  <ul className={styles.contactOurCustomerSupportT}>
                    <li className={styles.contactOurCustomer}>
                      Contact our customer support team by email or through the
                      support portal to initiate the refund request.
                    </li>
                  </ul>
                  <p className={styles.blankLine3}>&nbsp;</p>
                  <ul className={styles.provideADetailedExplanation}>
                    <li className={styles.provideADetailed}>
                      Provide a detailed explanation of the reason for your
                      refund request.
                    </li>
                  </ul>
                  <p className={styles.blankLine4}>&nbsp;</p>
                  <ul className={styles.ifApplicableReturnAnyDama}>
                    <li>
                      If applicable, return any damaged or defective hardware.
                    </li>
                  </ul>
                </div>
              </div>
              <div className={styles.processingTimeParent}>
                <h2 className={styles.processingTime}>
                  <ol className={styles.processingTime1}>
                    <li>Processing Time</li>
                  </ol>
                </h2>
                <div className={styles.refundsWillBe}>
                  Refunds will be processed within 10 business days from the
                  date your request is approved.
                </div>
              </div>
              <div className={styles.refundMethodParent}>
                <h2 className={styles.refundMethod}>
                  <ol className={styles.refundMethod1}>
                    <li>Refund Method</li>
                  </ol>
                </h2>
                <div className={styles.refundsWillBe1}>
                  Refunds will be issued using the same payment method used for
                  the original purchase. If this is not possible due to
                  technical limitations, an alternative method will be arranged
                  in consultation with you.
                </div>
              </div>
              <div className={styles.contactInformationParent}>
                <h2 className={styles.contactInformation}>
                  <ol className={styles.contactInformation1}>
                    <li>Contact Information</li>
                  </ol>
                </h2>
                <div className={styles.forAnyRefundRelatedContainer}>
                  <a
                    className={styles.supportemailcom}
                    href="mailto:support@email.com"
                    target="_blank"
                  >
                    support@email.com
                  </a>
                </div>
              </div>
              <div className={styles.changesToTheRefundPolicyParent}>
                <h2 className={styles.changesToTheContainer}>
                  <ol className={styles.changesToTheRefundPolicy}>
                    <li>Changes to the Refund Policy</li>
                  </ol>
                </h2>
                <div className={styles.weReserveThe}>
                  We reserve the right to update and modify this refund policy.
                  Any changes will be communicated on our website, and the
                  revised policy will apply to all future refund requests.
                </div>
              </div>
            </div>
          </div>
          <FrameComponent7 />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicy;
