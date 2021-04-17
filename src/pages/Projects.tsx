import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProjectsRequest } from '../state/projects/actions/get';
import { IApplicationState } from '../state/store'

const Projects: FC = () => {
  const store = useSelector((state: IApplicationState) => {
    return state.app.projects
  });
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("inside useeffect")
    dispatch(getProjectsRequest())
  }, [dispatch]);


  return (
    <div>
      <h1>Projects</h1>
      <input type='button' onClick={() => alert('aasd')} value="add new" />
      {store && store.projects.map(project => (<p key={project.id}>{project.name}</p>))}
    </div>
  )
}
export default Projects;

