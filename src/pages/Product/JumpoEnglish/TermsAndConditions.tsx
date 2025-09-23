import { lazy } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const Container = lazy(() => import("../../../common/Container"));

const TermsWrapper = styled.div`
  padding: 8rem 0 5rem;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    padding-top: 1rem;
  }

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: var(--text-color);
  }

  p, li {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-size: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 2rem;

    li {
      margin-bottom: 0.5rem;
      color: var(--text-light);

      a {
        color: var(--text-light);
        text-decoration: underline;
        
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }

  strong {
    font-weight: 600;
    color: var(--text-color);
  }

  hr {
    margin: 2rem 0;
    border: none;
    border-top: 1px solid var(--text-light);
  }
`;

const JumpoEnglishTermsAndConditions = ({ t }: { t: any }) => {
  return (
    <Container>
      <TermsWrapper>
        <h1>{t("Terms & Conditions")}</h1>
        
        <p>{t("These terms and conditions apply to the Jumpo English app (hereby referred to as \"Application\") for mobile devices that was created by Tran Thien Kien Thuc (hereby referred to as \"Service Provider\") as an Ad Supported service.")}</p>

        <p>{t("Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.")}</p>

        <p>{t("The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.")}</p>

        <p>{t("The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.")}</p>

        <h2>{t("Educational Content and Usage")}</h2>
        <p>{t("The Application provides educational content for English language learning. While the Service Provider strives to ensure the accuracy and quality of the educational materials, the content is provided for educational purposes only. The Service Provider does not guarantee specific learning outcomes or proficiency levels.")}</p>

        <p>{t("Users are encouraged to use the Application as a supplementary learning tool alongside formal education. The Service Provider recommends consulting with qualified educators for comprehensive language learning guidance.")}</p>

        <div>
          <p>{t("Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:")}</p>
          <ul>
            <li>
              <a 
                href="https://policies.google.com/terms" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Google Play Services
              </a>
            </li>
            <li>
              <a 
                href="https://unity3d.com/legal/terms-of-service" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Unity
              </a>
            </li>
          </ul>
        </div>

        <p>{t("Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.")}</p>

        <p>{t("If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.")}</p>

        <p>{t("Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.")}</p>

        <p>{t("In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.")}</p>

        <h2>{t("Learning Progress and Data")}</h2>
        <p>{t("The Application may track your learning progress, including vocabulary mastery, lesson completion, and performance metrics. This data is used to provide personalized learning experiences and improve the Application's educational content. By using the Application, you consent to the collection and use of this educational data as described in our Privacy Policy.")}</p>

        <p>{t("The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.")}</p>

        <h2>{t("Changes to These Terms and Conditions")}</h2>
        <p>{t("The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.")}</p>

        <p>{t("These terms and conditions are effective as of 2025-01-15")}</p>

        <h2>{t("Contact Us")}</h2>
        <p>
          {t("If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at")} <a href="mailto:thuc.playstore@gmail.com">thuc.playstore@gmail.com</a>
        </p>
      </TermsWrapper>
    </Container>
  );
};

export default withTranslation()(JumpoEnglishTermsAndConditions);
