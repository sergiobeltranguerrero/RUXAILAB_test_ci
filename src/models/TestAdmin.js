     /**
     * Create a TestAdmin.
     * @param {string} email - The email value.
     * @param {string} userDocId - The userDocId value.
     */

export default class TestAdmin{
    constructor({
        email, userDocId
    } = {}
    ) {
        this.email = email;
        this.userDocId = userDocId;
    }
    static toTestAdmin(data) {
        return new TestAdmin(data)
    }

    toFirestore() {
        return {
            email: this.email,
            userDocId: this.userDocId
        }
    }
}