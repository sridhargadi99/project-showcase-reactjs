import {Component} from 'react'
import Loader from 'react-loader-spinner'

import ProjectFailureView from '../ProjectFailureView'

import {
  MainContainer,
  HeaderContainer,
  Logo,
  SubContainer,
  SelectionList,
  Option,
  ProjectList,
  ProjectEachList,
  ProjectImage,
  ProjectName,
  RenderLoader,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const projectDetailsStatus = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class ProjectShowcase extends Component {
  state = {
    activeStatus: projectDetailsStatus.initial,
    projectId: categoriesList[0].id,
    projectList: [],
  }

  componentDidMount() {
    this.getProjectDetails()
  }

  runAndGetDetails = () => this.getProjectDetails()

  getProjectDetails = async () => {
    const {projectId} = this.state
    this.setState({
      activeStatus: projectDetailsStatus.inProgress,
    })
    const productUrl = `https://apis.ccbp.in/ps/projects?category=${projectId}`
    const options = {
      method: 'GET',
    }
    const response = await fetch(productUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedList = data.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))

      this.setState({
        projectList: updatedList,
        activeStatus: projectDetailsStatus.success,
      })
    } else {
      this.setState({activeStatus: projectDetailsStatus.failure})
    }
  }

  renderLoading = () => (
    <RenderLoader data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </RenderLoader>
  )

  renderSuccessView = () => {
    const {projectList} = this.state
    return (
      <ProjectList>
        {projectList.map(eachProject => (
          <ProjectEachList key={eachProject.id}>
            <ProjectImage src={eachProject.imageUrl} alt={eachProject.name} />
            <ProjectName>{eachProject.name}</ProjectName>
          </ProjectEachList>
        ))}
      </ProjectList>
    )
  }

  renderFailureView = () => (
    <ProjectFailureView runAndGetDetails={this.runAndGetDetails} />
  )

  renderContainer = () => {
    const {activeStatus} = this.state
    switch (activeStatus) {
      case projectDetailsStatus.inProgress:
        return this.renderLoading()
      case projectDetailsStatus.success:
        return this.renderSuccessView()
      case projectDetailsStatus.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onchangeProjectId = event =>
    this.setState({projectId: event.target.value}, this.getProjectDetails)

  render() {
    const {projectId} = this.state
    return (
      <MainContainer>
        <HeaderContainer>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt=" website logo"
          />
        </HeaderContainer>
        <SubContainer>
          <SelectionList value={projectId} onChange={this.onchangeProjectId}>
            {categoriesList.map(eachList => (
              <Option key={eachList.id} value={eachList.id}>
                {eachList.displayText}
              </Option>
            ))}
          </SelectionList>
        </SubContainer>
        {this.renderContainer()}
      </MainContainer>
    )
  }
}

export default ProjectShowcase
