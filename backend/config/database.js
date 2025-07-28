const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }

    async connect() {
        try {
            const mongoUri = process.env.MONGODB_URI || 'mongodb://localhost:27017/somers_dev';
            
            const options = {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                maxPoolSize: 10, // Maintain up to 10 socket connections
                serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
                socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
                bufferMaxEntries: 0, // Disable mongoose buffering
                bufferCommands: false, // Disable mongoose buffering
            };

            this.connection = await mongoose.connect(mongoUri, options);
            
            console.log(`✅ MongoDB connected successfully to: ${mongoUri}`);
            console.log(`📊 Database: ${this.connection.connection.db.databaseName}`);
            
            // Handle connection events
            mongoose.connection.on('error', (err) => {
                console.error('❌ MongoDB connection error:', err);
            });

            mongoose.connection.on('disconnected', () => {
                console.warn('⚠️ MongoDB disconnected');
            });

            mongoose.connection.on('reconnected', () => {
                console.log('🔄 MongoDB reconnected');
            });

            return this.connection;
        } catch (error) {
            console.error('❌ MongoDB connection failed:', error.message);
            process.exit(1);
        }
    }

    async disconnect() {
        try {
            if (this.connection) {
                await mongoose.disconnect();
                console.log('📴 MongoDB disconnected successfully');
            }
        } catch (error) {
            console.error('❌ Error disconnecting from MongoDB:', error.message);
        }
    }

    getConnection() {
        return this.connection;
    }

    isConnected() {
        return mongoose.connection.readyState === 1;
    }
}

// Singleton instance
const database = new Database();

module.exports = database;
