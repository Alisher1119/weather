export const variables = {
  white: '#ffffff',
  bgcolor: '#5bb0f3',
  component_bgcolor: '#d2b48c50',
  grey: '#333333',
  borderRadius: 10,
  marginTop: 10,
  marginV: 16,
  padding: 16,
  transparent: 'rgba(0, 0, 0, 0)',
};

export const app = {
  main: {
    flex: 1,
    width: '100%',
    // backgroundColor: variables.bgcolor,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    justifyContent: 'space-around',
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
};

export const header = {
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: variables.marginV,
    paddingHorizontal: variables.padding,
  },

  picker: {
    width: '80%',
    borderColor: variables.grey,
    borderWidth: 1,
    height: 45,
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 5,
  },

  input: {
    color: variables.white,
  },

  button: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 18,
  },
};

export const content = {
  content: {
    flex: 6,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignContent: 'space-between',
    flexDirection: 'column',
    marginVertical: variables.marginV,
    paddingHorizontal: variables.padding,
  },
};

export const today_forecast = {
  today_temp: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: variables.component_bgcolor,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: variables.padding,
    borderRadius: variables.borderRadius,
  },

  temperature: {
    flex: 1,
    flexDirection: 'row',
  },

  temp_indicator: {
    fontSize: 60,
    color: variables.white,
  },

  sup: {
    fontSize: 20,
    color: variables.white,
  },

  current_city: {
    flex: 1,
  },

  city: {
    fontSize: 20,
    color: variables.white,
  },
};

export const forecast = {
  container: {
    flex: 6,
    width: '100%',
    overflow: 'hidden',
    borderRadius: variables.borderRadius,
    marginTop: variables.marginTop,
    backgroundColor: variables.component_bgcolor,
  },

  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: variables.padding,
    width: '100%',
  },

  time: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  degree: {
    flex: 1,
    flexDirection: 'row',
  },

  title: {
    fontSize: 18,
    color: variables.white,
  },
};

export const details = {
  container: {
    flex: 2,
    width: '100%',
    backgroundColor: variables.component_bgcolor,
    borderRadius: variables.borderRadius,
    padding: variables.padding,
    marginTop: variables.marginTop,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: variables.white,
  },

  column: {
    flex: 1,
    padding: variables.padding,
    borderRightColor: variables.white,
    borderRightWidth: 1,
    flexDirection: 'row',
  },

  index_container: {
    flex: 2,
  },
  indexes: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  index: {
    fontSize: 16,
    color: variables.white,
  },
  image_container: {
    flex: 1,
  },

  image: {
    width: 30,
    height: 30,
  },

  title: {
    fontSize: 16,
    color: variables.white,
  },

  label: {
    fontSize: 10,
    color: '#d3d3d3',
  },
};

export const circle = {
  content: {
    color: variables.white,
    fontSize: 10,
  },
};

export const icon = {
  icon: {
    width: 30,
    height: 30,
  },
};
