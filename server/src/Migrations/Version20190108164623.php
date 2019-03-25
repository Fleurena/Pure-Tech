<?php declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190108164623 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE shooping_cart (id INT AUTO_INCREMENT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shooping_cart_product (shooping_cart_id INT NOT NULL, product_id INT NOT NULL, INDEX IDX_22C3A61C9728F322 (shooping_cart_id), INDEX IDX_22C3A61C4584665A (product_id), PRIMARY KEY(shooping_cart_id, product_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE = InnoDB');
        $this->addSql('ALTER TABLE shooping_cart_product ADD CONSTRAINT FK_22C3A61C9728F322 FOREIGN KEY (shooping_cart_id) REFERENCES shooping_cart (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shooping_cart_product ADD CONSTRAINT FK_22C3A61C4584665A FOREIGN KEY (product_id) REFERENCES product (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user ADD shooping_cart_id INT NOT NULL');
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D6499728F322 FOREIGN KEY (shooping_cart_id) REFERENCES shooping_cart (id)');
        $this->addSql('CREATE INDEX IDX_8D93D6499728F322 ON user (shooping_cart_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE shooping_cart_product DROP FOREIGN KEY FK_22C3A61C9728F322');
        $this->addSql('ALTER TABLE user DROP FOREIGN KEY FK_8D93D6499728F322');
        $this->addSql('DROP TABLE shooping_cart');
        $this->addSql('DROP TABLE shooping_cart_product');
        $this->addSql('DROP INDEX IDX_8D93D6499728F322 ON user');
        $this->addSql('ALTER TABLE user DROP shooping_cart_id');
    }
}
