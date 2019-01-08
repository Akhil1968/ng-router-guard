# What is a route guard?
You add guards to the route configuration to handle these scenarios-
--- When  the user is not authorized to navigate to the target component.
--- Maybe the user must login (authenticate) first.
--- Maybe you should fetch some data before you display the target component.
--- You might want to save pending changes before leaving a component.
--- You might ask the user if it's OK to discard pending changes rather than save them.

A guard's return value controls the router's behavior:
--- If it returns true, the navigation process continues.
--- If it returns false, the navigation process stops and the user stays put.

# The router supports multiple guard interfaces:
- CanActivate to mediate navigation to a route.
- CanActivateChild to mediate navigation to a child route.
- anDeactivate to mediate navigation away from the current route.
- Resolve to perform route data retrieval before route activation.
- CanLoad to mediate navigation to a feature module loaded asynchronously.

# How to setup a Guard in a route
Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard]
}]
