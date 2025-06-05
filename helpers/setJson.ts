// 使用泛型 T 来定义 data 的类型
interface SetJsonParams<T> {
  code?: number;
  message?: string;
  data?: T;
}

const setJson = <T>(params: SetJsonParams<T> = {}) => {
  const { code, message, data } = params;

  return {
    code: code ?? 0,
    message: message ?? 'ok',
    data: data||  [], 
  };
};

export default setJson;