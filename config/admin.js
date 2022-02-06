module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd6c62d3299de1d889f4badc6242b22e0'),
  },
});
