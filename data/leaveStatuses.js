const leaveStatuses = Object.freeze({
  WAITING: 'WAITING',
  REJECTEDBYALT: 'REJECTEDBYALT',
  WAITINGHODAPPROVAL: 'WAITINGHODAPPROVAL',
  REJECTEDBYHOD: 'REJECTEDBYHOD',
  ACCEPTED: 'ACCEPTED',
  EXPIRED: 'EXPIRED',
  CANCELLEDWAITINGHODAPPROVAL: 'CANCELLEDWAITINGHODAPPROVAL',
  CANCELLED: 'CANCELLED'
});

module.exports = leaveStatuses;