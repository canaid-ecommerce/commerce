export type Menu = {
  title: string;
  path: string;
};

export type MenuResponse = {
  menu: {
    data: {
      attributes: {
        items: [Menu];
      };
    };
  };
};
