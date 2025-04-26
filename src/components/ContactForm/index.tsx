import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { ContactProps, ValidationTypeProps } from "./types";
import { useForm } from "../../common/utils/useForm";
import validate from "../../common/utils/validationRules";
import { Button } from "../../common/Button";
import Block from "../Block";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { ContactContainer, FormGroup, Span, ButtonContainer } from "./styles";
import emailjs from '@emailjs/browser';
import { useState, useEffect } from "react";

const Contact = ({ title, content, id, t }: ContactProps) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('Cz2uum2eE4Iu4ZNQ2');
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Debug log: Print form values
    console.log(t('Form Values:'), values);
    
    // Validate form before sending
    const validationErrors = validate(values);
    console.log(t('Validation Errors:'), validationErrors);
    
    if (Object.keys(validationErrors).length > 0) {
      console.log(t('Form validation failed'));
      return;
    }

    setLoading(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const templateParams = {
        user_name: values.name,
        user_email: values.email,
        message: values.message,
        to_email: 'tdk.techsol@gmail.com'
      };

      console.log(t('Attempting to send email with params:'), templateParams);

      // For local development, simulate successful submission
      if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        console.log(t('Local development detected - simulating email send'));
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        console.log(t('Email would have been sent with these parameters:'), templateParams);
        
        setSubmitStatus({
          type: 'success',
          message: t('Your message has been sent successfully! (Simulated in local development)')
        });
        // Reset form after successful submission
        values.name = '';
        values.email = '';
        values.message = '';
      } else {
        // Production code
        const response = await emailjs.send(
          'service_ngg8u9u',
          'template_fsuax3n',
          templateParams
        );

        if (response.status === 200) {
          setSubmitStatus({
            type: 'success',
            message: t('Your message has been sent successfully!')
          });
          // Reset form after successful submission
          values.name = '';
          values.email = '';
          values.message = '';
        } else {
          throw new Error(t('Failed to send email'));
        }
      }
    } catch (error) {
      console.error(t('Error sending email:'), error);
      setSubmitStatus({
        type: 'error',
        message: t('Failed to send message. Please try again later.')
      });
    } finally {
      setLoading(false);
    }
  };

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type as keyof typeof errors];
    return <Span>{ErrorMessage}</Span>;
  };

  return (
    <ContactContainer id={id}>
      <Row justify="space-between" align="middle">
        <Col lg={12} md={11} sm={24} xs={24}>
          <Slide direction="left" triggerOnce>
            <Block title={title} content={content} />
          </Slide>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Slide direction="right" triggerOnce>
            <FormGroup autoComplete="off" onSubmit={sendEmail}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  placeholder={t("Your Name")}
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  placeholder={t("Your Email")}
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  placeholder={t("Your Message")}
                  value={values.message || ""}
                  name="message"
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              {submitStatus.type && (
                <Col span={24}>
                  <Span style={{ color: submitStatus.type === 'success' ? 'green' : 'red' }}>
                    {submitStatus.message}
                  </Span>
                </Col>
              )}
              <ButtonContainer>
                <Button name="submit" loading={loading}>
                  {loading ? t("Sending...") : t("Submit")}
                </Button>
              </ButtonContainer>
            </FormGroup>
          </Slide>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
