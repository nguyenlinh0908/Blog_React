function StandardizedRouter(router) {
  let isRouter = String(router);
  let lower = isRouter.toLowerCase();
  let after = lower.replace(" ", "-");
  return after;
}
export default StandardizedRouter;
