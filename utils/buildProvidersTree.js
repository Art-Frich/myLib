const buildProvidersTree = (componentsWithProps) => {
  const initialComponent = ({ children }) => <>{children}</>;

  return componentsWithProps.reduce((AccumulatedComponents, [Provider, props = {}]) => {
    return ({ children }) => {
      return (
        <AccumulatedComponents>
          <Provider {...props}>{children}</Provider>
        </AccumulatedComponents>
      );
    };
  }, initialComponent);
};

// example
const ProvidersTree = buildProvidersTree([
  [ThemeContext.Provider],
  [UserContext.Provider],
  [QueryClientProvider, { client: queryClient }],
  [ReduxProvider, { store }], // <ReduxProvider store={store}>
  [IntlProvider, { locale: usersLocale }],
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <ProvidersTree>
    <App />
  </ProvidersTree>
);
