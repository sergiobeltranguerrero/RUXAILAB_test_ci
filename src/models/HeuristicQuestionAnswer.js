     /**
     * Create a HeuristicQuestionAnswer.
     * @param {number} heuristicId - The heuristicId value.
     * @param {number} heuristicAnswer - The heuristicAnswer value.
     * @param {string} heuristicComment - The heuristicComment value.
     */

export default class HeuristicQuestionAnswer{
    constructor({
        heuristicId,
        heuristicAnswer,
        heuristicComment
    } = {}
    ) {
        this.heuristicId = heuristicId;
        this.heuristicAnswer = heuristicAnswer;
        this.heuristicComment = heuristicComment;
    }
    static toHeuristicQuestionAnswer(data) {
        return new HeuristicQuestionAnswer(data)
    }

    toFirestore() {
        return {
            heuristicId: this.heuristicId,
            heuristicAnswer: this.heuristicAnswer,
            heuristicComment: this.heuristicComment
        }
    }
}