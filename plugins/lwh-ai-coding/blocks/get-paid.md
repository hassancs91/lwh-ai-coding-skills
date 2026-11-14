# Get paid

### Payments
- What: Take money without touching cards.
- Applies when: the app takes payments.
- Stage: day-one-if
- Kind: checkable
- Done when: Card details go straight to the payment provider, and the app never receives or stores a card number. A test-mode payment completes end to end.

### Webhook fulfilment
- What: Grant on the webhook, not the redirect.
- Applies when: the app takes payments.
- Stage: day-one-if
- Kind: checkable
- Done when: Access is granted when the provider's signed webhook arrives, not when the browser returns. A fake webhook is refused, and a repeated one grants once.

### Subscriptions
- What: Recurring money, handled.
- Applies when: the app sells subscriptions.
- Stage: day-one-if
- Kind: checkable
- Done when: Subscribing, renewing, cancelling and expiry each change the user's access correctly, driven by the provider's events in test mode.

### Failed payments
- What: Cards fail. Chase them.
- Applies when: the app sells subscriptions.
- Stage: day-one-if
- Kind: checkable
- Done when: A failed renewal marks the account as past due, tells the user, and removes access after the grace period.

### Money as cents
- What: Never store money as a float.
- Applies when: the app stores or calculates money.
- Stage: day-one-if
- Kind: checkable
- Done when: Amounts are stored and calculated as whole cents. Adding 0.10 and 0.20 gives exactly 0.30.
