import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  min-height: 100vh;
`
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 15vh;
  background-color: #cbd5e1;
  padding-left: 40px;
`
export const Logo = styled.img`
  height: 50px;
  width: 120px;
`
export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
`
export const SelectionList = styled.select`
  padding-left: 10px;
  height: 40px;
  width: 30%;
  cursor: pointer;
  outline: none;
  border: 1px solid #cbd5e1;
  box-shadow: 0px 0px 0px 4px #ffffff;
  border-radius: 8px;
`
export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #475569;
`
export const RenderLoader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`
export const ProjectList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const ProjectEachList = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  width: 200px;
  margin-bottom: 20px;
  margin-right: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 4px 0px #bfbfbf;
`
export const ProjectImage = styled.img`
  height: 70%;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`
export const ProjectName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #475569;
`
