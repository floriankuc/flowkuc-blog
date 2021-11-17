import axios from "axios";
import { useEffect, useState } from "react";

export interface ProjectType {
  id: string;
  name: string;
  description: string;
  topics?: string[];
  html_url?: string;
  homepage?: string;
}

export type ProjectsApi = {
  value: ProjectType[];
  isLoading: boolean;
  error: unknown;
  isSuccess: boolean;
};

export const useProjectsApi = (): ProjectsApi => {
  const [value, setValue] = useState<ProjectType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<unknown>();

  const getProjects = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const { data, status } = await axios.get(
        "https://api.github.com/users/floriankuc/repos?sort=updated"
      );
      setValue(data);
      if (status === 200) setIsSuccess(true);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getProjects();
  }, []);

  return { value, isLoading, error, isSuccess };
};
