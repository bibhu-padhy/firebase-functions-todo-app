"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const admin_utils_1 = require("../util/admin.utils");
const getUsers = async (req, res) => {
    const dataContainer = [];
    const data = await admin_utils_1.db.collection('test')
        .get();
    data.docs.forEach(d => {
        dataContainer.push(d.data());
    });
    res.send(dataContainer);
};
exports.getUsers = getUsers;
//# sourceMappingURL=users.routes.js.map