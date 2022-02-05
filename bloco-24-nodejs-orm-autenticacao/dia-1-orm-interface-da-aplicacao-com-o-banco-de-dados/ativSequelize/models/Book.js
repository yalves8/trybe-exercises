const Book = (sequelize, DataTypes) => {
    const Book = sequelize.define("Book", {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      page_quantity: DataTypes.STRING,
    }, {
      timestamps: false,
      //freezeTableName: true /buscar no banco de dados uma tabela com o mesmo nome User ao invés de Users
      underscore: true, //usar o field
      tableName: "Books", // informações serão buscadas na tabela outracoisa
    });
  
    return Book;
  };
  
  module.exports = Book;