export type Menu = {
  title: string;
  path: string;
};

export type StrapiMenuOperation = {
  data: {
    menu?: {
      data: {
        id: number;
        attributes: {
          items: [Menu];
        };
      };
    };
  };
  variables: {
    handle: string;
  };
};
