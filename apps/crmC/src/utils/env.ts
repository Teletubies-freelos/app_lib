export class RequiredEnvError extends Error {
  constructor(envName: string){
    super(`The env ${envName} is required`)
  }
}

interface GetEnvOptions{
  prefix?: string;
  isRequired?: boolean;
}

export const getEnv = (evnName: string, options : GetEnvOptions = {}): string=>{
  const { isRequired = true, prefix = 'VITE_' } = options
  const value = import.meta.env[`${prefix}${evnName}`]

  if(isRequired && !value)
    throw new RequiredEnvError(`${prefix}${evnName}`);

  return value;
}
