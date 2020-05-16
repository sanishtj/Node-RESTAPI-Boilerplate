const { check } = require("express-validator");
const HRSBoilerplateController = require("../controllers/hrsBoilerplateController");

function routes(hrsBoilerplateRouter) {
  hrsBoilerplateRouter.get(
    "/hrsBoilerplates",
    HRSBoilerplateController().fetchHRSBoilerplateItems
  );

  hrsBoilerplateRouter.post(
    "/hrsBoilerplates",
    [
      check("hrsBoilerplateitems")
        .isArray()
        .withMessage("expecting an array of hrsBoilerplateitems"),
      check("hrsBoilerplateitems.*.type").custom((value) => {
        if (!value || (value && !["Twitter", "Facebook"].includes(value))) {
          throw new Error("type must be one of ['Twitter', 'Facebook']");
        }

        return true;
      }),
      check("hrsBoilerplateitems.*.html").custom((value) => {
        if (!value) {
          throw new Error("html property is required");
        }
        return true;
      }),
      check("hrsBoilerplateitems.*.createdon").custom((value) => {
        if (!value) {
          throw new Error("createdon property is required");
          // eslint-disable-next-line no-restricted-globals
        } else if (isNaN(Date.parse(value))) {
          throw new Error(
            "createdon property must be a valid date eg:2020-04-18T15:13:01.932Z"
          );
        }
        return true;
      }),
    ],
    HRSBoilerplateController().addHRSBoilerplateItems
  );

  hrsBoilerplateRouter.get(
    "/hrsBoilerplates/:id",
    HRSBoilerplateController().fetchHRSBoilerplateItemById
  );

  hrsBoilerplateRouter.patch(
    "/hrsBoilerplates/:id",
    [
      check("type").custom((value) => {
        if (value && !["Twitter", "Facebook"].includes(value)) {
          throw new Error("type must be one of ['Twitter', 'Facebook']");
        }

        return true;
      }),
      check("createdon").custom((value) => {
        // eslint-disable-next-line no-restricted-globals
        if (value && isNaN(Date.parse(value))) {
          throw new Error(
            "createdon property must be a valid date eg:2020-04-18T15:13:01.932Z"
          );
        }
        return true;
      }),
      check("ishidden").custom((value) => {
        // eslint-disable-next-line no-restricted-globals
        if (value && typeof value !== "boolean") {
          throw new Error("ishidden is either true or false [Boolean]");
        }
        return true;
      }),
    ],
    HRSBoilerplateController().patchHRSBoilerplateItem
  );

  hrsBoilerplateRouter.delete(
    "/hrsBoilerplates/:id",
    HRSBoilerplateController().deleteHRSBoilerplateItemById
  );

  return hrsBoilerplateRouter;
}

module.exports = routes;
