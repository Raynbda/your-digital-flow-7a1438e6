import * as React from 'react'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from '@react-email/components'

import type { TemplateEntry } from './registry'

interface NewSubmissionEmailProps {
  firstName?: string
  email?: string
  primary?: string
  secondary?: string | null
  headline?: string
  summary?: string
  scoreLines?: string[]
  answerLines?: string[]
  seriousness?: string | null
  interest?: string | null
  newsletterOptIn?: boolean
  adminUrl?: string
}

const Email = ({
  firstName,
  email,
  primary,
  secondary,
  headline,
  summary,
  scoreLines = [],
  answerLines = [],
  seriousness,
  interest,
  newsletterOptIn,
  adminUrl = 'https://creator-os.the-control-panel.com/admin',
}: NewSubmissionEmailProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>{`New diagnostic submission${firstName ? ` from ${firstName}` : ''}`}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New diagnostic submission</Heading>
        <Text style={text}>
          <strong>Name:</strong> {firstName || '—'}
          <br />
          <strong>Email:</strong> {email || '—'}
          <br />
          <strong>Diagnosis:</strong> {primary || '—'}
          {secondary ? ` + ${secondary}` : ''}
        </Text>
        <Hr style={hr} />
        <Heading style={h2}>The result they saw</Heading>
        {headline ? <Text style={strongText}>{headline}</Text> : null}
        {summary ? <Text style={text}>{summary}</Text> : null}
        {scoreLines.length ? (
          <Text style={text}>
            <strong>Score breakdown:</strong>
            <br />
            {scoreLines.map((line) => (
              <React.Fragment key={line}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </Text>
        ) : null}
        {answerLines.length ? (
          <>
            <Hr style={hr} />
            <Heading style={h2}>Their answers</Heading>
            <Text style={text}>
              {answerLines.map((line) => (
                <React.Fragment key={line}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </Text>
          </>
        ) : null}
        <Hr style={hr} />
        <Text style={text}>
          <strong>How serious:</strong> {seriousness || '—'}
          <br />
          <strong>Interest:</strong> {interest || '—'}
          <br />
          <strong>Newsletter:</strong> {newsletterOptIn ? 'Yes' : 'No'}
        </Text>
        <Button style={button} href={adminUrl}>
          View full submission
        </Button>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: Email,
  subject: (data: Record<string, any>) =>
    `New diagnostic submission${data['firstName'] ? ` — ${data['firstName']}` : ''}`,
  displayName: 'New diagnostic submission',
  to: 'rayen@the-control-panel.com',
  previewData: {
    firstName: 'Jane',
    email: 'jane@example.com',
    primary: 'Scattered Systems',
    secondary: 'Context Switching',
    seriousness: 'Very serious — I want this fixed now',
    interest: 'Yes, tell me more',
    newsletterOptIn: true,
  },
} satisfies TemplateEntry

export default Email

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '20px 25px' }
const h1 = {
  fontSize: '22px',
  fontWeight: 'bold' as const,
  color: '#000000',
  margin: '0 0 20px',
}
const text = { fontSize: '14px', color: '#55575d', lineHeight: '1.7', margin: '0 0 20px' }
const hr = { borderColor: '#e5e7eb', margin: '20px 0' }
const button = {
  backgroundColor: '#2563eb',
  color: '#ffffff',
  fontSize: '14px',
  border: '1px solid #2563eb',
  borderRadius: '8px',
  padding: '12px 20px',
  textDecoration: 'none',
}
const h2 = {
  fontSize: '16px',
  fontWeight: 'bold' as const,
  color: '#000000',
  margin: '0 0 10px',
}
const strongText = {
  fontSize: '15px',
  fontWeight: 'bold' as const,
  color: '#111827',
  margin: '0 0 10px',
}
