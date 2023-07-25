export type Menu = {
  title: string;
  path: string;
};

export type MenuResponse = {
  menu: {
    data: {
      id: number;
      attributes: {
        items: [Menu];
      };
    };
  };
};

export type StrapiMenuOperation = {
  data: {
    menu?: {
      data: {
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
