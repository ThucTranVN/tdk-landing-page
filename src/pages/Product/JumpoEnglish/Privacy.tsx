import { lazy } from "react";
import { withTranslation } from "react-i18next";
import styled from "styled-components";

const Container = lazy(() => import("../../../common/Container"));

const PrivacyWrapper = styled.div`
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
`;

const JumpoEnglishPrivacy = ({ t }: { t: any }) => {
  return (
    <Container>
      <PrivacyWrapper>
        <h1>{t("Privacy Policy")}</h1>
        
        <p>{t("This privacy policy applies to the Jumpo English app (hereby referred to as \"Application\") for mobile devices that was created by Tran Thien Kien Thuc (hereby referred to as \"Service Provider\") as an Ad Supported service. This service is intended for use \"AS IS\".")}</p>

        <h2>{t("Information Collection and Use")}</h2>
        <p>{t("The Application collects information when you download and use it. This information may include information such as")}</p>
        <ul>
          <li>{t("Your device's Internet Protocol address (e.g. IP address)")}</li>
          <li>{t("The pages of the Application that you visit, the time and date of your visit, the time spent on those pages")}</li>
          <li>{t("The time spent on the Application")}</li>
          <li>{t("The operating system you use on your mobile device")}</li>
          <li>{t("Learning progress and achievements within the app")}</li>
          <li>{t("Vocabulary and lesson completion data")}</li>
        </ul>

        <h2>{t("Location Information")}</h2>
        <p>{t("The Application does not gather precise information about the location of your mobile device.")}</p>

        <h2>{t("Contact and Marketing")}</h2>
        <p>{t("The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.")}</p>

        <h2>{t("Personal Information")}</h2>
        <p>{t("For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.")}</p>

        <h2>{t("Educational Data")}</h2>
        <p>{t("The Application may collect educational data including learning progress, vocabulary mastery, lesson completion rates, and performance metrics to provide personalized learning experiences and track educational outcomes.")}</p>

        <h2>{t("Third Party Access")}</h2>
        <p>{t("Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.")}</p>

        <h2>{t("Third Party Services Notice")}</h2>
        <p>{t("Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:")}</p>
        <ul>
          <li>
            <a 
              href="https://policies.google.com/privacy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Google Play Services
            </a>
          </li>
          <li>
            <a 
              href="https://unity.com/legal/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Unity
            </a>
          </li>
        </ul>

        <h2>{t("Information Disclosure")}</h2>
        <p>{t("The Service Provider may disclose User Provided and Automatically Collected Information:")}</p>
        <ul>
          <li>{t("Legal Compliance")}: {t("as required by law, such as to comply with a subpoena, or similar legal process;")}</li>
          <li>{t("Protection of Rights")}: {t("when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;")}</li>
          <li>{t("Service Providers")}: {t("with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.")}</li>
        </ul>

        <h2>{t("Opt-Out Rights")}</h2>
        <p>{t("You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.")}</p>

        <h2>{t("Data Retention Policy")}</h2>
        <p>{t("The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at thuc.playstore@gmail.com and they will respond in a reasonable time.")}</p>

        <h2>{t("Children")}</h2>
        <p>{t("The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.")}</p>

        <h2>{t("Children's Privacy")}</h2>
        <p>{t("The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (thuc.playstore@gmail.com) so that they will be able to take the necessary actions.")}</p>

        <h2>{t("Security")}</h2>
        <p>{t("The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.")}</p>

        <h2>{t("Changes")}</h2>
        <p>{t("This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.")}</p>

        <h2>{t("Effective Date")}</h2>
        <p>{t("This privacy policy is effective as of 2025-01-15")}</p>

        <h2>{t("Your Consent")}</h2>
        <p>{t("By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.")}</p>

        <h2>{t("Contact Us")}</h2>
        <p>
          {t("If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at")} <a href="mailto:thuc.playstore@gmail.com">thuc.playstore@gmail.com</a>
        </p>
      </PrivacyWrapper>
    </Container>
  );
};

export default withTranslation()(JumpoEnglishPrivacy);
