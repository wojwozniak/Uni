import Section from '../../ui/Section'

const About = ({ about }: { about: string }) => {
  return (
    <Section name="about" headerText="About">
      <p>{about}</p>
    </Section>
  )
}

export default About