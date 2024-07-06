import {
  FailureContainer,
  FailureSubContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureButton,
} from './styledComponents'

const ProjectFailureView = props => {
  const {runAndGetDetails} = props
  const onClickRetryButton = () => runAndGetDetails()

  return (
    <FailureContainer>
      <FailureSubContainer>
        <FailureImage
          src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureDescription>
          We cannot seem to find the page you are looking for.
        </FailureDescription>
        <FailureButton type="button" onClick={onClickRetryButton}>
          Retry
        </FailureButton>
      </FailureSubContainer>
    </FailureContainer>
  )
}

export default ProjectFailureView
