import { Text } from './ProjectItem';
import { useQuery } from '@tanstack/react-query';
import { getProjectFnItem } from '../../util/api.ts';
import { IProjectFn } from '../admin/projects/AdminProjectFn.tsx';

interface IProjectProps {
  projectName: string;
}

function ProjectFnItem({ projectName }: IProjectProps) {
  const { data, isLoading } = useQuery({
    queryKey: ['projectFn', { projectName }],
    queryFn: ({ signal }) => getProjectFnItem({ signal, projectName }),
  });

  return (
    <ul>
      {!isLoading &&
        data &&
        data.map((projectFn: IProjectFn) => (
          <Text>
            <div className="font-bold mg-b-5">{`<${projectFn.projectFnContent}>`}</div>
            {projectFn.projectFnTitle}
          </Text>
        ))}
    </ul>
  );
}

export default ProjectFnItem;
