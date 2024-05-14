import { FunctionComponent } from "react";
import styles from "./FrameComponent6.module.css";

const FrameComponent6: FunctionComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.cancellationOfServerHardwarParent}>
          <h2 className={styles.cancellationOfServerContainer}>
            <ol className={styles.cancellationOfServerHardwar}>
              <li>Cancellation of Server Hardware Orders</li>
            </ol>
          </h2>
          <div className={styles.ordersForServer}>
            Orders for server hardware can be canceled within 30 days of the
            original purchase date. To initiate a cancellation request, please
            contact our customer support team by email or through the support
            portal.
          </div>
        </div>
        <div className={styles.cancellationOfServicePlansParent}>
          <h2 className={styles.cancellationOfServiceContainer}>
            <ol className={styles.cancellationOfServicePlans}>
              <li>Cancellation of Service Plans</li>
            </ol>
          </h2>
          <div className={styles.servicePlansIncluding}>
            Service plans, including hosting, support, or any other
            subscription-based service, may have their own specific terms and
            conditions regarding cancellation. Please refer to the terms of your
            specific service plan for eligibility and procedures.
          </div>
        </div>
        <div className={styles.cancellationProcessParent}>
          <h2 className={styles.cancellationProcess}>
            <ol className={styles.cancellationProcess1}>
              <li>Cancellation Process</li>
            </ol>
          </h2>
          <div className={styles.toRequestAContainer}>
            <p className={styles.toRequestA}>
              To request a cancellation, please follow these steps:
            </p>
            <p className={styles.blankLine}>&nbsp;</p>
            <ul className={styles.contactOurCustomerSupportT}>
              <li className={styles.contactOurCustomer}>
                Contact our customer support team to initiate the cancellation
                request.
              </li>
            </ul>
            <p className={styles.blankLine1}>&nbsp;</p>
            <ul className={styles.provideADetailedExplanation}>
              <li>
                Provide a detailed explanation for the reason for your
                cancellation.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.eligibilityForRefundParent}>
          <h2 className={styles.eligibilityForRefundContainer}>
            <ol className={styles.eligibilityForRefund}>
              <li> Eligibility for Refund</li>
            </ol>
          </h2>
          <div className={styles.dependingOnThe}>
            Depending on the circumstances and the terms of your specific
            service plan, a refund may be available for eligible cancellations.
            Please refer to our Refund Policy for details.
          </div>
        </div>
        <div className={styles.refundMethodParent}>
          <h2 className={styles.refundMethod}>
            <ol className={styles.refundMethod1}>
              <li>Refund Method</li>
            </ol>
          </h2>
          <div className={styles.ifARefund}>
            If a refund is applicable for your canceled service, it will be
            issued using the same payment method used for the original purchase.
            If this is not possible due to technical limitations, an alternative
            method will be arranged in consultation with you.
          </div>
        </div>
        <div className={styles.nonEligibilityForCancellatiParent}>
          <h2 className={styles.nonEligibilityForCancellatiContainer}>
            <ol className={styles.nonEligibilityForCancellati}>
              <li>Non-Eligibility for Cancellation</li>
            </ol>
          </h2>
          <div className={styles.someServicesMay}>
            Some services may not be eligible for cancellation, particularly if
            they are already activated, exceeding usage limits, or if the
            cancellation violates our terms of service. Refer to your specific
            service plan and our terms of service for more details.
          </div>
        </div>
        <div className={styles.changesToTheCancellationPoParent}>
          <h2 className={styles.changesToTheContainer}>
            <ol className={styles.changesToTheCancellationPo}>
              <li>Changes to the Cancellation Policy</li>
            </ol>
          </h2>
          <div className={styles.weReserveThe}>
            We reserve the right to update and modify this cancellation policy.
            Any changes will be communicated on our website, and the revised
            policy will apply to all future cancellations.
          </div>
        </div>
        <div className={styles.contactInformationParent}>
          <h2 className={styles.contactInformation}>
            <ol className={styles.contactInformation1}>
              <li>Contact Information</li>
            </ol>
          </h2>
          <div className={styles.forAnyCancellationRelatedContainer}>
            <a
              className={styles.supportemailcom}
              href="mailto:support@email.com"
              target="_blank"
            >
              support@email.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent6;
