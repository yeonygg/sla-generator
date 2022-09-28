import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {
  Card,
  Heading,
  InputGroup,
  InputText,
  Section,
  BodyText,
} from "pier-design-system";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading>Rate, Spend, and SLA Generator</Heading>
        <Card className="card">
          <div className="card-style">
            <Section padding="xs">
              <Heading size="xs" className="sub-heading">
                Set Campaign
              </Heading>
              <BodyText size="xs" color="light">
                Fill in required campaign info
              </BodyText>
            </Section>

            <Section padding="xs" className="first-section">
              <div className="inputgroup-01">
                <InputGroup
                  label="client name"
                  size="sm"
                  error="*required"
                  dark={false}
                >
                  <InputText placeholder="Enter Text" />
                </InputGroup>
              </div>
            </Section>
          </div>
        </Card>
      </main>
    </div>
  );
}
