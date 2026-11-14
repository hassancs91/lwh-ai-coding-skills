# AI · retrieval & memory

### Embeddings
- What: Search by meaning, not by words.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Vector database
- What: Fast nearest-neighbor storage.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### RAG
- What: Retrieve first, answer second.
- Applies when: an AI model answers from the app's own documents.
- Stage: day-one-if
- Kind: checkable
- Done when: Answers come from the retrieved documents. A question with no matching document gets an honest 'I don't know', not an invented answer.

### Chunking
- What: Where you cut decides what's found.
- Applies when: the term comes up.
- Stage: any
- Kind: concept

### Citations
- What: Answers that show their receipts.
- Applies when: an AI model answers from the app's own documents.
- Stage: day-one-if
- Kind: checkable
- Done when: Each answer shows which documents it used, and each reference opens the right source.

### Conversation memory
- What: Carry the thread, not the transcript.
- Applies when: the app has an AI chat.
- Stage: day-one-if
- Kind: checkable
- Done when: A follow-up question that depends on earlier messages is answered correctly, and a long chat stays within the model's limit.

### Knowledge freshness
- What: Stale index, stale answers.
- Applies when: the documents an AI model answers from keep changing.
- Stage: with-users
- Kind: checkable
